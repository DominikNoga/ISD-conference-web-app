import { Component, OnInit } from '@angular/core';
import { Ticket } from 'src/app/interfaces/Ticket';
// import { MOCK_TRACKS } from 'src/app/mock_data/tickets_data';
import { CsvDataService } from 'src/app/services/csv-data/csv-data.service';
import { ChangeDetectorRef } from '@angular/core';

// declare var $: any;

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
      // console.log("Tickets:", this.tickets);
    })
    // $('#collapseExample').collapse();
  }
  ticketValues: Map<number, { id: number, value: number, name: string }> = new Map();

  TicketSelected(eventData: { id: number, value: number, name: string }): void 
  {
    const { id, value, name } = eventData;
    this.ticketValues.set(id, { id, value, name });
    console.log("ID", id, "Value:", value, "opis", name);
    this.cdr.detectChanges();
  }

  // calculatePrice(ticket: { id: number, value: number, name: string }): number {
  //   console.log("Ticket:", ticket.name);
  //   if (ticket.name === 'Presenting author') {
  //     return ticket.value * 400;
  //   } else if (ticket.name === 'Normal ticket') {
  //     return ticket.value * 200;
  //   } else if (ticket.name === 'Discounted fee for additional paper') {
  //     return ticket.value * 300;
  //   } else if (ticket.name === 'Extra page') {
  //     return ticket.value * 50; // Cena za stronę
  //   } else if (ticket.name === 'Discouted ticked') {
  //     return ticket.value * 200; // Cena za przeceniony bilet
  //   }
  //   // Jeśli nazwa biletu nie pasuje do żadnej z powyższych, zwróć 0
  //   return 0;
  // }
  // calculateTotalPrice(): number {
  //   let totalPrice = 0;
  //   for (const ticket of this.ticketValues.values()) {
  //     totalPrice += this.calculatePrice(ticket);
  //   }
  //   return totalPrice;
  // }

  // inicjalizujHarmonijkę() {
  //   const tytuly = document.querySelectorAll('.tytul');
  
  //   tytuly.forEach(function(tytul) {
  //     tytul.addEventListener('click', function(this: HTMLElement) {
  //       const zawartosc = this.nextElementSibling as HTMLElement;
  //       if (zawartosc.style.display === 'none') {
  //         zawartosc.style.display = 'block';
  //       } else {
  //         zawartosc.style.display = 'none';
  //       }
  //     });
  //   });
  // }


}
