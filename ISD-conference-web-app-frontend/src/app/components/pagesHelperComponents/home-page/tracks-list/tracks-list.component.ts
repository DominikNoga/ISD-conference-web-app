import { Component, OnInit } from '@angular/core';
import { YEAR } from 'src/app/constants/constants';
import { Track } from 'src/app/interfaces/Track';
import { CsvDataService } from 'src/app/services/csv-data/csv-data.service';

@Component({
  selector: 'isd-tracks-list',
  templateUrl: './tracks-list.component.html',
  styleUrls: ['./tracks-list.component.scss']
})
export class TracksListComponent implements OnInit {
  tracks!: Track[];
  readonly YEAR = YEAR;

  constructor(private csvDataService: CsvDataService) { }

  ngOnInit(): void {
    this.csvDataService.getTracksCsvData().subscribe(tracks => {
      this.tracks = tracks;
    });
  }

}
