import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChairsListComponent } from './chairs-list.component';

describe('ChairsListComponent', () => {
  let component: ChairsListComponent;
  let fixture: ComponentFixture<ChairsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChairsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChairsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
