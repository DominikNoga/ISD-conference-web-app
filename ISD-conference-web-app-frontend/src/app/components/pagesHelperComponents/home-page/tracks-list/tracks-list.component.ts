import { Component, OnInit } from '@angular/core';
import { YEAR } from 'src/app/constants/constants';

@Component({
  selector: 'isd-tracks-list',
  templateUrl: './tracks-list.component.html',
  styleUrls: ['./tracks-list.component.scss']
})
export class TracksListComponent implements OnInit {
  tracks!: {
    title: string,
    order: number
  }[];
  readonly YEAR = YEAR;

  constructor() { }

  ngOnInit(): void {
    // TODO: get tracks from csv
    this.tracks =  []
  }

}
