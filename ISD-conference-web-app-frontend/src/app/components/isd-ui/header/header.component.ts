import { Component, OnInit, HostListener } from '@angular/core';
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

  isMenuVisible = true;
  lastScrollTop = 0;

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    let currentScroll = window.scrollY ;
    let delta = 5;
    

  if(Math.abs(this.lastScrollTop - currentScroll) >= delta){
    if (currentScroll >= this.lastScrollTop && window.scrollY > 70) {
      // Scrolling down
      this.isMenuVisible = false;
    } else {
      // Scrolling up
      this.isMenuVisible = true;
    }
    console.log("Current scroll:", currentScroll)
    console.log("LastScrollTop: ", this.lastScrollTop)
  
    this.lastScrollTop = currentScroll;
  }
}
}
