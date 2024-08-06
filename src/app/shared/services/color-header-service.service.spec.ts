import { TestBed } from '@angular/core/testing';

import { ColorHeaderService } from './color-header.service';

describe('ColorHeaderServiceService', () => {
  let service: ColorHeaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColorHeaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
