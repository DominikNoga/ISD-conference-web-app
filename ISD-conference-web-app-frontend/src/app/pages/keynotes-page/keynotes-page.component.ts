import { Component, OnInit } from '@angular/core';
import { CsvDataService } from 'src/app/services/csv-data/csv-data.service';
import { keynote } from 'src/app/interfaces/keynote';
@Component({
  selector: 'isd-keynotes-page',
  templateUrl: './keynotes-page.component.html',
  styleUrls: ['./keynotes-page.component.scss']
})
export class KeynotesPageComponent implements OnInit {
  keynotes!: keynote[];
  constructor(private csvDataService: CsvDataService) { }

  ngOnInit(): void 
  {
    this.csvDataService.getKeynotesData().subscribe(keynotes => {
      this.keynotes = keynotes;
      console.log("keynotes:", this.keynotes);
    })
  }

}
