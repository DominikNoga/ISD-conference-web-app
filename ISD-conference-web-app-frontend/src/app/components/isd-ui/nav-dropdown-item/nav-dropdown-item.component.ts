import { Component, Input, OnInit } from '@angular/core';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { NavDropdownItem } from 'src/app/interfaces/Nav';

@Component({
  selector: 'isd-nav-dropdown-item',
  templateUrl: './nav-dropdown-item.component.html',
  styleUrls: ['./nav-dropdown-item.component.scss']
})
export class NavDropdownItemComponent implements OnInit {
  currentIcon = faChevronDown;
  @Input() navItem!: NavDropdownItem;
  isDropdownLinkActive: boolean = false;

  constructor() { }

  ngOnInit(): void {
    console.log(this.navItem);
  }

  onMouseOut = () => {
    this.currentIcon = faChevronDown;
  }

  onMouseOver = () => {
    this.currentIcon = faChevronUp;
  }

  setIsDropdownActive = (value: boolean) => {
    this.isDropdownLinkActive = value;
  }
}
