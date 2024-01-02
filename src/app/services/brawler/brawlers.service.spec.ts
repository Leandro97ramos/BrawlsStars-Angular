import { TestBed } from '@angular/core/testing';

import { BrawlersService } from './brawlers.service';

describe('BrawlersService', () => {
  let service: BrawlersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrawlersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
