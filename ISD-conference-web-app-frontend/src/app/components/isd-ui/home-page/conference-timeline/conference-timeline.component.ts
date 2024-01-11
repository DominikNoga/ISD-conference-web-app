import { Component, OnInit } from '@angular/core';
import { EVENTS } from './conference-timeline.constants';

@Component({
  selector: 'isd-conference-timeline',
  templateUrl: './conference-timeline.component.html',
  styleUrls: ['./conference-timeline.component.scss']
})
export class ConferenceTimelineComponent implements OnInit {
  readonly EVENTS = EVENTS;

  constructor() { }

  ngOnInit(): void {
  }

}
