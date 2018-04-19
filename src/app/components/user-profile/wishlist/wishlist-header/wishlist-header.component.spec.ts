import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WishlistHeaderComponent } from './wishlist-header.component';

describe('WishlistHeaderComponent', () => {
  let component: WishlistHeaderComponent;
  let fixture: ComponentFixture<WishlistHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WishlistHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WishlistHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
