import { Component, Input, OnInit } from '@angular/core';
import { ConferenceEvent } from 'src/app/interfaces/ConferenceEvent';
import { faChevronUp, faEnvelope, faHouse, faLightbulb, faLocationDot } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'isd-past-conference-tile',
  templateUrl: './past-conference-tile.component.html',
  styleUrls: ['./past-conference-tile.component.scss']
})
export class PastConferenceTileComponent implements OnInit {
  @Input() event!: ConferenceEvent;
  houseIcon = faHouse;
  locationIcon = faLocationDot;
  lightbulbIcon = faLightbulb;
  constructor() { }

  ngOnInit(): void {
  }

}
