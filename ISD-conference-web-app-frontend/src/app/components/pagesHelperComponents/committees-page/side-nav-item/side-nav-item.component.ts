import { Component, Input, OnInit } from '@angular/core';
import { isEmpty } from 'lodash-es';
import { SideNavItem } from 'src/app/interfaces/SideNav';

@Component({
  selector: 'isd-side-nav-item',
  templateUrl: './side-nav-item.component.html',
  styleUrls: ['./side-nav-item.component.scss']
})
export class SideNavItemComponent implements OnInit {
  @Input() navItem!: SideNavItem;

  constructor() { }

  ngOnInit(): void {
  }

  hasSubNav = () => !isEmpty(this.navItem.subMenu);
}
