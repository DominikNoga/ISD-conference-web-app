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
  localCoChairs!: Chair[];
  @Input() listId!: string;
  
  constructor(private csvDataService: CsvDataService) { }

  ngOnInit(): void {
    this.csvDataService.getOrganizingCommitteeData().subscribe(chairs => {
      this.chairs = chairs.filter(chair => chair.function !== 'Local Arrangement Co-Chair');
      this.localCoChairs = chairs.filter(chair => chair.function === 'Local Arrangement Co-Chair');
    })
  }

}
