import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwittsListComponent } from './twitts-list.component';

describe('TwittsListComponent', () => {
  let component: TwittsListComponent;
  let fixture: ComponentFixture<TwittsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwittsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwittsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
