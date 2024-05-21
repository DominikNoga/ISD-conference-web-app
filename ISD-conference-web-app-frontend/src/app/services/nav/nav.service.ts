import {  Injectable } from '@angular/core';
import { NAV_ITEMS } from './nav.constants';
import { NavDefaultItem, NavDropdownItem } from 'src/app/interfaces/Nav';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavService {
  public readonly NAV_ITEMS = NAV_ITEMS;
  private readonly DISPLAY_BURGER_NAV_TRESHOLD = 1100;
  readonly CLOSED = 'closed';
  readonly OPENED = 'opened';
  private animationClass: string = this.OPENED;
  private currentWidnowWidth!: number;
  private burgerNavToggled = false;

  constructor() { 
    this.currentWidnowWidth = window.innerWidth;
  }

  private animationClassSubject: BehaviorSubject<string> = new BehaviorSubject<string>(this.OPENED);
  public animationClass$ = this.animationClassSubject.asObservable();

  public toggleAnimationClass(): void {
    this.animationClass = this.animationClass === this.CLOSED ? this.OPENED : this.CLOSED;
    this.animationClassSubject.next(this.animationClass);
  }

  onWindowResize = () => {
    this.currentWidnowWidth = window.innerWidth;
  }

  public displayBurgerNav = (): boolean => this.currentWidnowWidth <= this.DISPLAY_BURGER_NAV_TRESHOLD;

  public isBurgerNavToggled = () => this.burgerNavToggled;

  public toggleBurgerNav = (): void => {
    this.burgerNavToggled = !this.burgerNavToggled;
    this.toggleAnimationClass();
  }

  public isDefaultItem = (navItem: NavDefaultItem | NavDropdownItem): boolean => navItem instanceof Object && 'route' in navItem;

  public getBurgerNavToggled = (): boolean => this.burgerNavToggled;
}
