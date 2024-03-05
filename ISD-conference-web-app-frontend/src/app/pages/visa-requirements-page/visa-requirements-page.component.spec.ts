import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisaRequirementsPageComponent } from './visa-requirements-page.component';

describe('VisaRequirementsPageComponent', () => {
  let component: VisaRequirementsPageComponent;
  let fixture: ComponentFixture<VisaRequirementsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisaRequirementsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisaRequirementsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
