import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChairsListItemComponent } from './chairs-list-item.component';

describe('ChairsListItemComponent', () => {
  let component: ChairsListItemComponent;
  let fixture: ComponentFixture<ChairsListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChairsListItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChairsListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
