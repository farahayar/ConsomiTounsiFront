import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireProductComponent } from './formulaire-product.component';

describe('FormulaireProductComponent', () => {
  let component: FormulaireProductComponent;
  let fixture: ComponentFixture<FormulaireProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
