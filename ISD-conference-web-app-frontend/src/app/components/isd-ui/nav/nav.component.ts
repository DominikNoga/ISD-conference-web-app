import { Component, OnInit } from '@angular/core';
import { ROUTE_PROPS } from './nav.constants';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'isd-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  currentIcon = faChevronDown
  ROUTE_PROPS = ROUTE_PROPS;
  
  constructor() { }

  ngOnInit(): void {
  }

  onMouseOut = () => {
    this.currentIcon = faChevronDown;
  }

  onMouseOver = () => {
    this.currentIcon = faChevronUp;
  }
}
