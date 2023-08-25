import { TestBed } from '@angular/core/testing';

import { ApiinterceptService } from './apiintercept.service';

describe('ApiinterceptService', () => {
  let service: ApiinterceptService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiinterceptService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
