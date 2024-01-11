import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineSingleEventComponent } from './timeline-single-event.component';

describe('TimelineSingleEventComponent', () => {
  let component: TimelineSingleEventComponent;
  let fixture: ComponentFixture<TimelineSingleEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimelineSingleEventComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimelineSingleEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
