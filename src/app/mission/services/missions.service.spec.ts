import { TestBed } from '@angular/core/testing';

import { MissionsService } from './missions.service';

describe('CharactersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MissionsService = TestBed.get(MissionsService);
    expect(service).toBeTruthy();
  });
});
