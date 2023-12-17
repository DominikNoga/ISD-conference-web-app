import { Component, OnInit } from '@angular/core';
import { ROUTE_PROPS } from './nav.constants';

@Component({
  selector: 'isd-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  ROUTE_PROPS = ROUTE_PROPS;
  
  constructor() { }

  ngOnInit(): void {
  }

}
