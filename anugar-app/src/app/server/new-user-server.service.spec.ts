import { TestBed } from '@angular/core/testing';

import { NewUserServer } from './new-user-server.service';

describe('NewUserServer', () => {
  let service: NewUserServer;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewUserServer);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
