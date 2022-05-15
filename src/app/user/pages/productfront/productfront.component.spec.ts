import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductfrontComponent } from './productfront.component';

describe('ProductfrontComponent', () => {
  let component: ProductfrontComponent;
  let fixture: ComponentFixture<ProductfrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductfrontComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductfrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
