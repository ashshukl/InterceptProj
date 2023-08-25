import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiclientService {

  constructor(private apiClient: HttpClient) {
    
  }

  getData() {
    //return this.apiClient.get('https://jsonplaceholder.typicode.com/posts?userId=1');
    return this.apiClient.get('https://interceptor-test.free.beeceptor.com/users');
  }

}
