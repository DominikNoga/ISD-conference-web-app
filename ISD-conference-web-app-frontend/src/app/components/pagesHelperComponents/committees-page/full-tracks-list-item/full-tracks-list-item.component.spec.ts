import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullTracksListItemComponent } from './full-tracks-list-item.component';

describe('FullTracksListItemComponent', () => {
  let component: FullTracksListItemComponent;
  let fixture: ComponentFixture<FullTracksListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullTracksListItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullTracksListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
