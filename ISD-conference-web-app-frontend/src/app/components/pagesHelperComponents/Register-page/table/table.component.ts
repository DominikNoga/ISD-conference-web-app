import { Component, OnInit } from '@angular/core';
import { Ticket } from 'src/app/interfaces/Ticket';
import { CsvDataService } from 'src/app/services/csv-data/csv-data.service';
@Component({
  selector: 'isd-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  tickets!: Ticket[];
  constructor(private csvDataService: CsvDataService) { }

  ngOnInit(): void {
    this.csvDataService.getTicketsData().subscribe(tickets => {
      this.tickets = tickets;
    })
  }

}
