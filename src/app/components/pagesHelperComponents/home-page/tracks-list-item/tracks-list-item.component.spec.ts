import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TracksListItemComponent } from './tracks-list-item.component';

describe('TracksListItemComponent', () => {
  let component: TracksListItemComponent;
  let fixture: ComponentFixture<TracksListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TracksListItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TracksListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
