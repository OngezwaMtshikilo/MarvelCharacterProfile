import { TestBed } from '@angular/core/testing';

import { CharacterdataService } from './characterdata.service';

describe('CharacterdataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CharacterdataService = TestBed.get(CharacterdataService);
    expect(service).toBeTruthy();
  });
});
