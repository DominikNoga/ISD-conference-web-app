import { Component, OnInit } from '@angular/core';
import { SideNavItem } from 'src/app/interfaces/SideNav';
import { SIDE_NAV_ITEMS } from './side-nav.constants';

@Component({
  selector: 'isd-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  sideNavItems: SideNavItem[] = SIDE_NAV_ITEMS;
  isDisplayed = false;
  readonly CLOSED = 'closed';
  readonly OPENED = 'opened';
  animationClass: 'opened' | 'closed' = this.OPENED;

  constructor() { }

  ngOnInit(): void {
  }

  toggleSideNav() {
    this.isDisplayed = !this.isDisplayed;
    this.toggleAnimationClass();
  }

  public toggleAnimationClass(): void {
    this.animationClass = this.animationClass === this.CLOSED ? this.OPENED : this.CLOSED;
  }
}
