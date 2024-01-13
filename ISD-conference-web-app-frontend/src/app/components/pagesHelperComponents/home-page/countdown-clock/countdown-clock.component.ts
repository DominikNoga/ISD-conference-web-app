import { Component, OnDestroy, OnInit } from '@angular/core';
import { YEAR, CONFERENCE_START_DATE } from 'src/app/constants/constants';

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
}

@Component({
  selector: 'isd-countdown-clock',
  templateUrl: './countdown-clock.component.html',
  styleUrls: ['./countdown-clock.component.scss']
})
export class CountdownClockComponent implements OnInit, OnDestroy {
  readonly YEAR = YEAR;
  readonly CONFERENCE_START_DATE = CONFERENCE_START_DATE;
  readonly MINUTE_IN_MS = 1000 * 60;
  interval!: NodeJS.Timeout;
  timeLeft: TimeLeft = {
    days: 0,
    minutes: 0,
    hours: 0,
  };

  constructor() { }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  ngOnInit(): void {
    this.setTimeLeft();
    this.interval = setInterval(this.setTimeLeft, this.MINUTE_IN_MS)
  }

  

  setTimeLeft = (): void => {
    const now = new Date();
    const nowTime = now.getTime();
    const startDateTime = CONFERENCE_START_DATE.getTime();
    const msInDay = 1000 * 60 * 60 * 24;
    const msInHour = 60 * 60 * 1000;
    const msInMinute = 60 * 1000;
    const difference = startDateTime- nowTime;
    const days = Math.floor(difference / msInDay);
    const hours = Math.floor((difference % msInDay) / msInHour);
    const minutes = Math.floor((difference % msInHour) / msInMinute);

    this.timeLeft.days = days;
    this.timeLeft.hours = hours;
    this.timeLeft.minutes = minutes;
  }
}
