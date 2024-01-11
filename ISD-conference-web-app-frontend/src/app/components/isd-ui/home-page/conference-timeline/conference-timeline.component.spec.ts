import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConferenceTimelineComponent } from './conference-timeline.component';

describe('ConferenceTimelineComponent', () => {
  let component: ConferenceTimelineComponent;
  let fixture: ComponentFixture<ConferenceTimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConferenceTimelineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConferenceTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
