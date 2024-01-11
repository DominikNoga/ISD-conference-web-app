import { Component, OnInit } from '@angular/core';
import { YEAR } from 'src/app/constants/constants';

@Component({
  selector: 'isd-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  readonly YEAR = YEAR;
  readonly WHITE_COLOR = 'white';
  readonly WHITE_DARKER_COLOR = 'rgba(247, 247, 247)';

  constructor() { }

  ngOnInit(): void {
  }

}
