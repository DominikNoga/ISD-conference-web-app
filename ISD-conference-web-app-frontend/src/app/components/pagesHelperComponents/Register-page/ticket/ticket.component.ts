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
    DiscountBool: boolean;
    DiscountedPrice: number;
    TicketDescription: string;
    DiscountExpiration: Date;
    AvailableUntil: Date;
    Color: string;
  };

  constructor() {}

  ngOnInit(): void {}

  ngOnDestroy(): void {}


  @Output() ticketSelected = new EventEmitter<{ id: number, value: number, name: string }>();
  selectOption(id: number, $event: any, name: string): void {
    const targetValue = $event?.target?.value;
  
    if (targetValue !== undefined && targetValue !== null) {
      this.ticketSelected.emit({ id, value: parseInt(targetValue), name });
    } else {
      console.error("targetValue is null or undefined");
    }
  }
  
  
}
