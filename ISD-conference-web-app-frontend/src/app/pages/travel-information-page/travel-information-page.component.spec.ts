import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelInformationPageComponent } from './travel-information-page.component';

describe('TravelInformationPageComponent', () => {
  let component: TravelInformationPageComponent;
  let fixture: ComponentFixture<TravelInformationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelInformationPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TravelInformationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
