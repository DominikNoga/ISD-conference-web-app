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

  constructor() { }

  ngOnInit(): void {
  }

}
