import { TestBed } from '@angular/core/testing';

import { NavBarControlService } from './nav-bar-control.service';

describe('NavBarControlService', () => {
  let service: NavBarControlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavBarControlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
