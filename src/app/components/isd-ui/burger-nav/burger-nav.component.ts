import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { NavDefaultItem, NavDropdownItem, NavItem } from 'src/app/interfaces/Nav';
import { NavService } from 'src/app/services/nav/nav.service';

@Component({
  selector: 'isd-burger-nav',
  templateUrl: './burger-nav.component.html',
  styleUrls: ['./burger-nav.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({
        opacity: 1
      })),
      state('closed', style({
        opacity: 0
      })),
      transition('open => closed', [
        animate('0.7s')
      ]),
      transition('closed => open', [
        animate('0.7s')
      ])
    ])
  ]
})
export class BurgerNavComponent implements OnInit {
  NAV_ITEMS!: NavItem[];

  constructor(private navService: NavService) { }

  ngOnInit(): void {
    this.NAV_ITEMS = this.navService.NAV_ITEMS;
  }

  castToDropdownItem = (item: NavDefaultItem | NavDropdownItem) => <NavDropdownItem>item;

  castToDefaultItem = (item: NavDefaultItem | NavDropdownItem) => <NavDefaultItem>item;

  isDropdownItem = (item: NavDefaultItem | NavDropdownItem) => !this.navService.isDefaultItem(item);

  isNavToggled = (): boolean => this.navService.isBurgerNavToggled();

  toggleNav = (): void => {
    this.navService.toggleBurgerNav();
  }
}
