import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallForPapersPageComponent } from './call-for-papers-page.component';

describe('CallForPapersPageComponent', () => {
  let component: CallForPapersPageComponent;
  let fixture: ComponentFixture<CallForPapersPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CallForPapersPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CallForPapersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
