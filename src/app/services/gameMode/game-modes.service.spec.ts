import { TestBed } from '@angular/core/testing';

import { GameModesService } from './game-modes.service';

describe('GameModesService', () => {
  let service: GameModesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameModesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
