import { Component, OnInit } from '@angular/core';
import { SideNavItem } from 'src/app/interfaces/SideNav';
import { getSideNavItems } from './side-nav.constants';
import { CsvDataService } from 'src/app/services/csv-data/csv-data.service';
import { Track } from 'src/app/interfaces/Track';

@Component({
  selector: 'isd-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  sideNavItems: SideNavItem[] = [];
  tracks: Track[] = [];

  constructor(private csvDataService: CsvDataService) { }

  ngOnInit(): void {
    this.csvDataService.getTracksCsvData().subscribe(tracks => {
      this.sideNavItems = getSideNavItems(tracks);
    });
  }
}
