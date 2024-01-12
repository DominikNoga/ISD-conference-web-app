import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavDropdownItemComponent } from './nav-dropdown-item.component';

describe('NavDropdownItemComponent', () => {
  let component: NavDropdownItemComponent;
  let fixture: ComponentFixture<NavDropdownItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavDropdownItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavDropdownItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
