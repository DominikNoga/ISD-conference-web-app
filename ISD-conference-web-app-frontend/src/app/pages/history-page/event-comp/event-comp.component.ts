import { Component, OnInit } from '@angular/core';
import {my_event} from '../my_event';
import {EVENTS} from '../Events';
import { faChevronUp, faEnvelope, faHouse, faLightbulb, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'isd-event-comp',
  templateUrl: './event-comp.component.html',
  styleUrls: ['./event-comp.component.scss']
})
export class EventCompComponent implements OnInit {
  houseIcon = faHouse;
  locationIcon = faLocationDot;
  lightbulbIcon = faLightbulb;
  events: my_event[] = EVENTS;

  constructor() { }

  ngOnInit(): void {
    console.log(this.events);
  }

}



 
