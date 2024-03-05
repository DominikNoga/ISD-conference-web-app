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
    DiscountExpiration: Date,
    AvailableUntil: Date,
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
          AvailableUntil: ticket.AvailableUntil,
          Color: ticket.Color
        }
      )
    );
  }
  id = 0;
  value_student = 0;
  value_normal = 0;
  // TicketSelected($event: [number, number]): void 
  // {
  //   this.id = $event[0];
  //   this.value = $event[1];
  // }

  TicketSelected(eventData: { id: number, value: number }): void {
    this.id = eventData.id;
    console.log("Ojciec", this.id, "Value:", eventData.value);

    if (this.id === 1) 
    {
      this.value_normal = eventData.value;
    } 
    else if (this.id === 2) 
    {
      this.value_student = eventData.value;
    }
    else
    {
      console.error("id is not 0 or 1");
    }

  }
  
}
