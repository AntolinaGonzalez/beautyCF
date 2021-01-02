import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporalCareComponent } from './corporal-care.component';

describe('CorporalCareComponent', () => {
  let component: CorporalCareComponent;
  let fixture: ComponentFixture<CorporalCareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorporalCareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorporalCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
