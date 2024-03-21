import { Component, OnInit } from '@angular/core';
import { NavService } from 'src/app/services/nav/nav.service';

@Component({
  selector: 'isd-burger',
  templateUrl: './burger.component.html',
  styleUrls: ['./burger.component.scss']
})
export class BurgerComponent implements OnInit {
  readonly CLOSED = 'closed';
  readonly OPENED = 'opened';
  animationClass!: string;

  constructor(private navService: NavService) { }

  ngOnInit(): void {
  }

  toggleNav() {
    this.navService.toggleBurgerNav();
    this.setAnimationClass();
  }

  setAnimationClass = () => {
    if(typeof this.animationClass === 'undefined'){
      this.animationClass = this.CLOSED;
      return;
    }
    this.animationClass = this.animationClass === this.OPENED ? this.CLOSED : this.OPENED;
  }

  getAnimationClass = (className: string) => `${className}-${this.animationClass}`;
}
