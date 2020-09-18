import { TestBed } from '@angular/core/testing';

import { GrownStateService } from './grown-state.service';

describe('GrownStateService', () => {
  let service: GrownStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GrownStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
