import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullTracksListComponent } from './full-tracks-list.component';

describe('FullTracksListComponent', () => {
  let component: FullTracksListComponent;
  let fixture: ComponentFixture<FullTracksListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullTracksListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullTracksListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
