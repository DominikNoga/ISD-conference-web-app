import { Component, Inject, Input, OnInit } from '@angular/core';
import { isEmpty } from 'lodash-es';
import { SideNavItem } from 'src/app/interfaces/SideNav';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'isd-side-nav-item',
  templateUrl: './side-nav-item.component.html',
  styleUrls: ['./side-nav-item.component.scss']
})
export class SideNavItemComponent implements OnInit {
  @Input() navItem!: SideNavItem;

  ngOnInit(): void {
  }

  constructor() { }

  scrollToElement(event: Event, elementId: string): void {
    event.preventDefault();
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  hasSubNav = () => !isEmpty(this.navItem.subMenu);
}
