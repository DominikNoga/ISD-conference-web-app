import { Component, OnInit } from '@angular/core';
import { YEAR } from 'src/app/constants/constants';
import { Track } from 'src/app/interfaces/Track';
import { MOCK_TRACKS } from 'src/app/mock_data/mock_tracks_data';

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
    this.tracks =  MOCK_TRACKS.map(track => (
        {
          title: track.title,
          order: track.order
        }
      )
    );
  }

}
