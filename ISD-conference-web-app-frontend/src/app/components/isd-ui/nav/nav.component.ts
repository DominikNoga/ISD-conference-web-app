import { Component, OnInit } from '@angular/core';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { NAV_ITEMS } from './nav.constants';
import { NavDefaultItem, NavDropdownItem, NavItem } from 'src/app/interfaces/Nav';

@Component({
  selector: 'isd-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  currentIcon = faChevronDown
  NAV_ITEMS = NAV_ITEMS;

  constructor() { }

  ngOnInit(): void {
  }

  onMouseOut = () => {
    this.currentIcon = faChevronDown;
  }

  onMouseOver = () => {
    this.currentIcon = faChevronUp;
  }

  getNavDefaultItem = (navItem: NavItem): NavDefaultItem => <NavDefaultItem>navItem.item;

  getNavDropdopdownItem = (navItem: NavItem): NavDropdownItem => <NavDropdownItem>navItem.item;

  isDefaultItem = (navItem: NavDefaultItem | NavDropdownItem): boolean => navItem instanceof Object && 'route' in navItem;
}
