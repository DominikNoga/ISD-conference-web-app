import { Component, Input, OnInit } from '@angular/core';
import { isNil } from 'lodash-es';

@Component({
  selector: 'isd-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {
  @Input() bgColor!: string;
  @Input() padding!: string;
  
  readonly DEFAULT_BG_COLOR = 'rgb(247, 247, 247)';
  readonly DEFAULT_PADDING = '5rem 1rem';

  constructor() { }

  ngOnInit(): void {
    this.bgColor = isNil(this.bgColor) ? this.DEFAULT_BG_COLOR : this.bgColor;
    this.padding = isNil(this.padding) ? this.DEFAULT_PADDING : this.padding;
  }

}
