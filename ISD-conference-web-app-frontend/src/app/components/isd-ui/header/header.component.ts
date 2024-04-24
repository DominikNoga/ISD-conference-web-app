import { Component, OnInit } from '@angular/core';
import { NavService } from 'src/app/services/nav/nav.service';

@Component({
  selector: 'isd-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  burgerAnimationClass!: string;

  constructor(private navService: NavService) { }

  ngOnInit(): void {
    this.navService.animationClass$.subscribe(animationClass => {
      this.burgerAnimationClass = animationClass;
    });
  }

  displayBurgerNav(): boolean {
    return this.navService.displayBurgerNav();
  }

  toggleBurgerNav = (): void => {
    this.navService.toggleBurgerNav();
  }
}
