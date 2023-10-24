import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommitteesPageComponent } from './committees-page.component';

describe('CommitteesPageComponent', () => {
  let component: CommitteesPageComponent;
  let fixture: ComponentFixture<CommitteesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommitteesPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommitteesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
