import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastConferencesListComponent } from './past-conferences-list.component';

describe('PastConferencesListComponent', () => {
  let component: PastConferencesListComponent;
  let fixture: ComponentFixture<PastConferencesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PastConferencesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PastConferencesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
