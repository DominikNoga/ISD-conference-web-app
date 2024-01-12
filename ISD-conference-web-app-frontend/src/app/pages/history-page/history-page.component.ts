import { Component, OnInit } from '@angular/core';
import {ConferenceEvent} from '../../interfaces/ConferenceEvent';
import {EVENTS} from './history-page.constants';
import { faChevronUp, faEnvelope, faHouse, faLightbulb, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'isd-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.scss']
})

export class HistoryPageComponent implements OnInit {
  readonly PADDING_BETWEEN_SECTIONS = '1rem';
  houseIcon = faHouse;
  locationIcon = faLocationDot;
  lightbulbIcon = faLightbulb;
  events: ConferenceEvent[] = EVENTS;

  constructor() { }

  ngOnInit(): void {
  }

}


