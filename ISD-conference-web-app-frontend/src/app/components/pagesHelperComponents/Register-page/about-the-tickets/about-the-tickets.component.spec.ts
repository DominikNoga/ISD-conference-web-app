import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutTheTicketsComponent } from './about-the-tickets.component';

describe('AboutTheTicketsComponent', () => {
  let component: AboutTheTicketsComponent;
  let fixture: ComponentFixture<AboutTheTicketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutTheTicketsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutTheTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
