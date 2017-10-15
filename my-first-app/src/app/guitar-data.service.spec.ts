/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GuitarDataService } from './guitar-data.service';

describe('GuitarDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GuitarDataService]
    });
  });

  it('should ...', inject([GuitarDataService], (service: GuitarDataService) => {
    expect(service).toBeTruthy();
  }));
});
