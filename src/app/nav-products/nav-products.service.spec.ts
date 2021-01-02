import { TestBed } from '@angular/core/testing';

import { NavProductsService } from './nav-products.service';

describe('NavProductsService', () => {
  let service: NavProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
