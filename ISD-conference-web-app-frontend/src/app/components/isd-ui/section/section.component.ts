import { Component, Input, OnInit } from '@angular/core';
import { isNil } from 'lodash-es';

@Component({
  selector: 'isd-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {
  @Input() bgColor!: string;
  readonly DEFAULT_BG_COLOR = 'white';

  constructor() { }

  ngOnInit(): void {
    this.bgColor = isNil(this.bgColor) ? this.DEFAULT_BG_COLOR : this.bgColor;
  }

}
