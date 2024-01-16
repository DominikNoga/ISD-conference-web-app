import { Component, OnInit } from '@angular/core';
import { Ticket } from 'src/app/interfaces/Ticket';
import { MOCK_TRACKS } from 'src/app/mock_data/tickets_data';

@Component({
  selector: 'isd-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {
  tickets!: {
    order: number,
    TicketType: string,
    Fullprice: number,
    DiscountedPrice: number,
    TicketDescription: string,
    DiscountExpiration: string,
    Color: string
  }[];
  
  constructor() { }

  ngOnInit(): void {
    this.tickets =  MOCK_TRACKS.map((ticket: Ticket) => (
        {
          TicketType: ticket.TicketType,
          order: ticket.order,
          Fullprice: ticket.Fullprice,
          DiscountedPrice: ticket.DiscountedPrice,
          TicketDescription: ticket.TicketDescription,
          DiscountExpiration: ticket.DiscountExpiration,
          Color: ticket.Color
        }
      )
    );
  }

}
