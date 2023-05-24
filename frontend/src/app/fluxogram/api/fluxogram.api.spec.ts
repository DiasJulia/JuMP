import { TestBed } from '@angular/core/testing';

import { FluxogramApi } from './fluxogram.api';

describe('FluxogramApiService', () => {
  let service: FluxogramApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FluxogramApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
