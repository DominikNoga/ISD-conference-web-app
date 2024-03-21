import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbuttonComponent } from './addbutton.component';

describe('AddbuttonComponent', () => {
  let component: AddbuttonComponent;
  let fixture: ComponentFixture<AddbuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddbuttonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
