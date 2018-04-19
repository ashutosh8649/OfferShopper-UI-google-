import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrybagOfferComponent } from './carrybag-offer.component';

describe('CarrybagOfferComponent', () => {
  let component: CarrybagOfferComponent;
  let fixture: ComponentFixture<CarrybagOfferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarrybagOfferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrybagOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
