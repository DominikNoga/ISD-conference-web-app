import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeynotesPageComponent } from './keynotes-page.component';

describe('KeynotesPageComponent', () => {
  let component: KeynotesPageComponent;
  let fixture: ComponentFixture<KeynotesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeynotesPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeynotesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
