import { TestBed } from '@angular/core/testing';

import { DemowsclientService } from './demowsclient.service';

describe('DemowsclientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DemowsclientService = TestBed.get(DemowsclientService);
    expect(service).toBeTruthy();
  });
});
