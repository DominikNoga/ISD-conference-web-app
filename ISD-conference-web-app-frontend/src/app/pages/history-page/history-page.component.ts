import { Component, OnInit } from '@angular/core';
import {my_event} from './my_event';
import {EVENTS} from './Events';
import { faChevronUp, faEnvelope, faHouse, faLightbulb, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'isd-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.scss']
})

export class HistoryPageComponent implements OnInit {

  houseIcon = faHouse;
  locationIcon = faLocationDot;
  lightbulbIcon = faLightbulb;
  events: my_event[] = EVENTS;

  constructor() { }

  ngOnInit(): void {
  }

}


