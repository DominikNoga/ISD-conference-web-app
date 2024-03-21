import { Component, OnInit } from '@angular/core';
import { Chair } from 'src/app/interfaces/Chair';
import { Track } from 'src/app/interfaces/Track';
import { MOCK_CHAIRS, MOCK_TRACKS } from 'src/app/mock_data/mock_tracks_data';

@Component({
  selector: 'isd-committees-page',
  templateUrl: './committees-page.component.html',
  styleUrls: ['./committees-page.component.scss']
})
export class CommitteesPageComponent implements OnInit {
  readonly CHAIRS: Chair[] = MOCK_CHAIRS; 
  readonly TRACKS: Track[] = MOCK_TRACKS; 

  constructor() { }

  ngOnInit(): void {
  }

}
