import { Component, OnInit } from '@angular/core';
import { Chair } from 'src/app/interfaces/Chair';
import { CsvDataService } from 'src/app/services/csv-data/csv-data.service';

@Component({
  selector: 'isd-steering-committee',
  templateUrl: './steering-committee.component.html',
  styleUrls: ['./steering-committee.component.scss']
})
export class SteeringCommitteeComponent implements OnInit {
  chairs!: Chair[];
  webChair!: Chair;
  
  constructor(private csvDataService: CsvDataService) { }

  ngOnInit(): void {
    this.csvDataService.getOrganizingCommitteeData().subscribe(chairs => {
      this.chairs = chairs.filter(chair => chair.function === 'Steering committee member');
    })
  }

}
