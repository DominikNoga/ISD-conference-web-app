import { Component, Input, OnInit } from '@angular/core';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { isNil } from 'lodash-es';
import { DateBetween, Event } from 'src/app/interfaces/Event';

@Component({
  selector: 'isd-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  @Input() events!: Event[];
  CHECK_ICON = faCheck;

  constructor() { }

  ngOnInit(): void {
  }

  eventAlreadyHappned = (eventDate: Date | DateBetween | undefined): boolean => {
    if(isNil(eventDate)) {
      return false;
    }
    else if(eventDate instanceof Object && 'start' in eventDate && 'end' in eventDate) {
      return Number(Date.now()) > Number(eventDate.end);
    }
    else {
      return Number(Date.now()) > Number(eventDate);
    }
  };
}
