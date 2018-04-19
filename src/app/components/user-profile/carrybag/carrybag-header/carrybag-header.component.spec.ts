import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrybagHeaderComponent } from './carrybag-header.component';

describe('CarrybagHeaderComponent', () => {
  let component: CarrybagHeaderComponent;
  let fixture: ComponentFixture<CarrybagHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarrybagHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrybagHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
