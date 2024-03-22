import { Component, OnInit } from '@angular/core';
import { NavService } from 'src/app/services/nav/nav.service';

@Component({
  selector: 'isd-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private navService: NavService) { }

  ngOnInit(): void {
  }

  displayBurgerNav(): boolean {
    return this.navService.displayBurgerNav();
  }
}
