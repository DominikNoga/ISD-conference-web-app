import { Component, OnInit } from '@angular/core';
import { CsvDataService } from 'src/app/services/csv-data/csv-data.service';

@Component({
  selector: 'isd-call-for-papers-page',
  templateUrl: './call-for-papers-page.component.html',
  styleUrls: ['./call-for-papers-page.component.scss']
})
export class CallForPapersPageComponent implements OnInit {
  readonly PADDING_BETWEEN_SECTIONS = '1rem';
  tracks: string[] = [];

  constructor(private csvDataService: CsvDataService) {}

  ngOnInit(): void {
    this.csvDataService.getTracksCsvData().subscribe(tracksData => {
      this.tracks = tracksData.map(track => track['title']);
    });
  }
}