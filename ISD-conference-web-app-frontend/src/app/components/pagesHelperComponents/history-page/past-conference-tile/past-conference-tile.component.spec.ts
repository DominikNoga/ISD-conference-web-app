import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastConferenceTileComponent } from './past-conference-tile.component';

describe('PastConferenceTileComponent', () => {
  let component: PastConferenceTileComponent;
  let fixture: ComponentFixture<PastConferenceTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PastConferenceTileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PastConferenceTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
