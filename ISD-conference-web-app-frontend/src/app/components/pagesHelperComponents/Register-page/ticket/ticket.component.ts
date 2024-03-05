import { Component, Input, OnInit, ElementRef, Renderer2, OnDestroy,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'isd-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit, OnDestroy {
  @Input() ticket!: {
    order: number;
    TicketType: string;
    Fullprice: number;
    DiscountedPrice: number;
    TicketDescription: string;
    DiscountExpiration: Date;
    AvailableUntil: Date;
    Color: string;
  };

  constructor() {}

  ngOnInit(): void {}

  ngOnDestroy(): void {}


  // @Output() ticketSelected = new EventEmitter<[number,number]>();
  @Output() ticketSelected = new EventEmitter<{ id: number, value: number }>();
  selectOption(id: number, $event: any): void {
    const targetValue = $event?.target?.value;
  
    if (targetValue !== undefined && targetValue !== null) {
      // console.log("Dziecko: ",id, " ", targetValue);
      this.ticketSelected.emit({ id, value: parseInt(targetValue) });
    } else {
      console.error("targetValue is null or undefined");
    }
  }
  
  
}
