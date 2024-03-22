import { Component, HostListener, OnInit } from '@angular/core';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { NavDefaultItem, NavDropdownItem, NavItem } from 'src/app/interfaces/Nav';
import { NavService } from 'src/app/services/nav/nav.service';

@Component({
  selector: 'isd-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  currentIcon = faChevronDown
  NAV_ITEMS!: NavItem[];

  constructor(private navService: NavService) { }

  ngOnInit(): void {
    this.NAV_ITEMS = this.navService.NAV_ITEMS;
  }

  @HostListener('window:resize')
  onWindowResize() {
    this.navService.onWindowResize();
  }

  onMouseOut = () => {
    this.currentIcon = faChevronDown;
  }

  onMouseOver = () => {
    this.currentIcon = faChevronUp;
  }

  displayBurgerNav = (): boolean => this.navService.displayBurgerNav();

  getNavDefaultItem = (navItem: NavItem): NavDefaultItem => <NavDefaultItem>navItem.item;

  getNavDropdopdownItem = (navItem: NavItem): NavDropdownItem => <NavDropdownItem>navItem.item;

  isDefaultItem = (navItem: NavDefaultItem | NavDropdownItem): boolean => navItem instanceof Object && 'route' in navItem;
}
