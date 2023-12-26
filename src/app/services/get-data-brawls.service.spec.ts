import { TestBed } from '@angular/core/testing';

import { GetDataBrawlsService } from './get-data-brawls.service';

describe('GetDataBrawlsService', () => {
  let service: GetDataBrawlsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetDataBrawlsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
