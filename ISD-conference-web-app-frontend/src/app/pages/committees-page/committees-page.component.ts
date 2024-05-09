import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'isd-committees-page',
  templateUrl: './committees-page.component.html',
  styleUrls: ['./committees-page.component.scss']
})
export class CommitteesPageComponent implements OnInit {
  readonly SCROLL_TRESHOLD = 150;
  isFixedPosition = false;
  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if (window.scrollY > this.SCROLL_TRESHOLD) {
      this.isFixedPosition = true;
    } else {
      this.isFixedPosition = false;
    }
  }
}
