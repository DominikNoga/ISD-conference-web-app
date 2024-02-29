import {  Injectable } from '@angular/core';
import { NAV_ITEMS } from './nav.constants';
import { NavDefaultItem, NavDropdownItem } from 'src/app/interfaces/Nav';

@Injectable({
  providedIn: 'root'
})
export class NavService {
  public readonly NAV_ITEMS = NAV_ITEMS;
  private readonly DISPLAY_BURGER_NAV_TRESHOLD = 1000;
  private currentWidnowWidth!: number;
  private burgerNavToggled = false;

  constructor() { 
    this.currentWidnowWidth = window.innerWidth;
  }

  onWindowResize = () => {
    this.currentWidnowWidth = window.innerWidth;
  }

  public displayBurgerNav = (): boolean => this.currentWidnowWidth <= this.DISPLAY_BURGER_NAV_TRESHOLD;

  public toggleBurgerNav = (): void => {
    this.burgerNavToggled != this.burgerNavToggled;
  }

  public isDefaultItem = (navItem: NavDefaultItem | NavDropdownItem): boolean => navItem instanceof Object && 'route' in navItem;

  public getBurgerNavToggled = (): boolean => this.burgerNavToggled;
}
