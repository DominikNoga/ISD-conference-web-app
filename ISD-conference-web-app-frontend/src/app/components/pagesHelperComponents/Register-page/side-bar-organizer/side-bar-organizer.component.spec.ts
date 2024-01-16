import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarOrganizerComponent } from './side-bar-organizer.component';

describe('SideBarOrganizerComponent', () => {
  let component: SideBarOrganizerComponent;
  let fixture: ComponentFixture<SideBarOrganizerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideBarOrganizerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideBarOrganizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
