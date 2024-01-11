import { Component, Input, OnInit } from '@angular/core';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { isNil } from 'lodash-es';
import { DateBetween, Event } from 'src/app/interfaces/Event'
import dayjs from 'dayjs';

@Component({
  selector: 'isd-timeline-single-event',
  templateUrl: './timeline-single-event.component.html',
  styleUrls: ['./timeline-single-event.component.scss']
})
export class TimelineSingleEventComponent implements OnInit {
  @Input() event!: Event;
  CHECK_ICON = faCheck;

  constructor() { }

  ngOnInit(): void {
  }

  getFormattedEventDate = () => {
    if(isNil(this.event.date)) {
      return 'TBD';
    }
    else if(this.event.date instanceof Object && 'start' in this.event.date && 'end' in this.event.date) {
      const start = dayjs(this.event.date.start).format('MMMM D');
      const end = dayjs(this.event.date.end).format('D, YYYY')
      return `${start} - ${end}`
    }
    else {
      return dayjs(this.event.date).format('MMMM D, YYYY');
    }
  }

  eventAlreadyHappned = (): boolean => {
    if(isNil(this.event.date)) {
      return false;
    }
    else if(this.event.date instanceof Object && 'start' in this.event.date && 'end' in this.event.date) {
      return Number(Date.now()) > Number(this.event.date.end);
    }
    else {
      return Number(Date.now()) > Number(this.event.date);
    }
  };
}
