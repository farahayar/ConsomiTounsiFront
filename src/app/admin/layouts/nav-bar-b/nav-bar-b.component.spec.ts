import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarBComponent } from './nav-bar-b.component';

describe('NavBarBComponent', () => {
  let component: NavBarBComponent;
  let fixture: ComponentFixture<NavBarBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBarBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
