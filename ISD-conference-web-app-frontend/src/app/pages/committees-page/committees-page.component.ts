import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'isd-committees-page',
  templateUrl: './committees-page.component.html',
  styleUrls: ['./committees-page.component.scss']
})
export class CommitteesPageComponent implements OnInit {
  readonly SCROLL_TRESHOLD = 150;
  readonly SCREEN_WIDTH_TRESHOLD = 1040;
  isFixedPosition = false;
  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if (window.scrollY > this.SCROLL_TRESHOLD && innerWidth > this.SCREEN_WIDTH_TRESHOLD) {
      this.isFixedPosition = true;
    } else {
      this.isFixedPosition = false;
    }
  }
}
