import { Component, Input, OnInit } from '@angular/core';
import { Chair } from 'src/app/interfaces/Chair';
import { CsvDataService } from 'src/app/services/csv-data/csv-data.service';

@Component({
  selector: 'isd-chairs-list',
  templateUrl: './chairs-list.component.html',
  styleUrls: ['./chairs-list.component.scss']
})
export class ChairsListComponent implements OnInit {
  chairs!: Chair[];
  @Input() listId!: string;
  
  constructor(private csvDataService: CsvDataService) { }

  ngOnInit(): void {
    this.csvDataService.getCommittiesData().subscribe(chairs => {
      this.chairs = chairs;
    })
  }

}
