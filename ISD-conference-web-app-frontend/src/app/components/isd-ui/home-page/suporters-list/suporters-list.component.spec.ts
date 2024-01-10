import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuportersListComponent } from './suporters-list.component';

describe('SuportersListComponent', () => {
  let component: SuportersListComponent;
  let fixture: ComponentFixture<SuportersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuportersListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuportersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
