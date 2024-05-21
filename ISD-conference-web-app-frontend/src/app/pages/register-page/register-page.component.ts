import { Component, OnInit } from '@angular/core';
import { Ticket } from 'src/app/interfaces/Ticket';
import { CsvDataService } from 'src/app/services/csv-data/csv-data.service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'isd-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {
  tickets!: Ticket[];

  constructor(private cdr: ChangeDetectorRef, private csvDataService: CsvDataService) { }

  ngOnInit(): void 
  {
    this.csvDataService.getTicketsData().subscribe(tickets => {
      this.tickets = tickets;
    })
  }
  ticketValues: Map<number, { id: number, value: number, name: string }> = new Map();

  TicketSelected(eventData: { id: number, value: number, name: string }): void 
  {
    const { id, value, name } = eventData;
    this.ticketValues.set(id, { id, value, name });
    console.log("ID", id, "Value:", value, "opis", name);
    this.cdr.detectChanges();
  }

}
