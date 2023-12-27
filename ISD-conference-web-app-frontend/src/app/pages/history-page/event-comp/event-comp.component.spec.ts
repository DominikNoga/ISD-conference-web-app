import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventCompComponent } from './event-comp.component';

describe('EventCompComponent', () => {
  let component: EventCompComponent;
  let fixture: ComponentFixture<EventCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
