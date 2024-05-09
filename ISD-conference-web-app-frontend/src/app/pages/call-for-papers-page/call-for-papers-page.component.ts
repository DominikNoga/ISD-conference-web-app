import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'isd-call-for-papers-page',
  templateUrl: './call-for-papers-page.component.html',
  styleUrls: ['./call-for-papers-page.component.scss']
})
export class CallForPapersPageComponent implements OnInit {
  readonly PADDING_BETWEEN_SECTIONS = '1rem';

  constructor() { }

  ngOnInit(): void {
  }

}
