import { Component, Input, OnInit } from '@angular/core';
import { NavDefaultItem } from 'src/app/interfaces/Nav';

@Component({
  selector: 'isd-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss']
})
export class NavItemComponent implements OnInit {
  @Input() navItem!: NavDefaultItem;

  constructor() { }

  ngOnInit(): void {
  }

}
