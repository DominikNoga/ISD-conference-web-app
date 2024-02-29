import { Component, OnInit } from '@angular/core';
import { NavDefaultItem, NavDropdownItem, NavItem } from 'src/app/interfaces/Nav';
import { NavService } from 'src/app/services/nav/nav.service';

@Component({
  selector: 'isd-burger-nav',
  templateUrl: './burger-nav.component.html',
  styleUrls: ['./burger-nav.component.scss']
})
export class BurgerNavComponent implements OnInit {
  NAV_ITEMS!: NavItem[];

  constructor(private navService: NavService) { }

  ngOnInit(): void {
    this.NAV_ITEMS = this.navService.NAV_ITEMS;
  }

  castToDropdownItem = (item: NavDefaultItem | NavDropdownItem) => <NavDropdownItem>item;

  isDropdownItem = (item: NavDefaultItem | NavDropdownItem) => this.navService.isDefaultItem(item);
}
