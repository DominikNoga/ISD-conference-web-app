import { Component, Input, OnInit, ElementRef, Renderer2, OnDestroy } from '@angular/core';

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
    DiscountExpiration: string;
    Color: string;
  };

  private resizeListener: () => void;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.resizeListener = this.adjustTicketWidth.bind(this);
  }

  ngOnInit(): void {
    this.adjustTicketWidth();
    window.addEventListener('resize', this.resizeListener);
  }

  ngOnDestroy(): void {
    window.removeEventListener('resize', this.resizeListener);
  }

  private adjustTicketWidth() {
    const ticketWrapper = this.el.nativeElement.querySelector('.ticket-wrapper');
    if (ticketWrapper) {
      let multiplier = 0.5;
      if(window.innerWidth >600)
      {
        multiplier = 0.5;
        console.log("0.5");
      }
      else{
        multiplier = 1;
        console.log("1");
      }
      const contentWidth = Math.min(1200, window.innerWidth * multiplier);
      this.renderer.setStyle(ticketWrapper, 'width', `${contentWidth}px`);
    }
  }
}
