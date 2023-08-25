import { Component } from '@angular/core';
import { ApiclientService } from './apiclient.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'InterceptProj';
  public dataSet:any;
  constructor (private apiclient: ApiclientService){

  }

  clicked(){
    this.apiclient.getData().subscribe({next: (data) => {
    if (Array.isArray(data)){
      this.dataSet = data;
    }
    else {
      this.dataSet = [data];
    }
  }, error: (error) => console.log(error)
  }
  )
  }

}
