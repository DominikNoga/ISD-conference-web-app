import { Component, OnInit } from '@angular/core';
import { ConferenceEvent } from 'src/app/interfaces/ConferenceEvent';
import { EVENTS } from './past-conferences-list.constants';

@Component({
  selector: 'isd-past-conferences-list',
  templateUrl: './past-conferences-list.component.html',
  styleUrls: ['./past-conferences-list.component.scss']
})
export class PastConferencesListComponent implements OnInit {
  events: ConferenceEvent[] = EVENTS;

  constructor() { }

  ngOnInit(): void {
  }

}
