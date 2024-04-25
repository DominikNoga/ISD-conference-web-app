import { Component, OnInit } from '@angular/core';
import { Track } from 'src/app/interfaces/Track';
import { CsvDataService } from 'src/app/services/csv-data/csv-data.service';

@Component({
  selector: 'isd-full-tracks-list',
  templateUrl: './full-tracks-list.component.html',
  styleUrls: ['./full-tracks-list.component.scss']
})
export class FullTracksListComponent implements OnInit {
  tracks: Track[] = [];

  constructor(private csvDataService: CsvDataService) { }

  ngOnInit(): void {
    this.csvDataService.getTracksCsvData().subscribe(tracks => {
      this.tracks = tracks.splice(1, tracks.length - 2);
    });
  }

}
