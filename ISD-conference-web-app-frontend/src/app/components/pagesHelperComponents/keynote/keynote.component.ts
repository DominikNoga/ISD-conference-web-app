import { Component, OnInit, Input, ElementRef, Renderer2 } from '@angular/core';
import { ToggleCountService } from './toggle-count.service.service';
import { keynote } from 'src/app/interfaces/keynote';

@Component({
  selector: 'isd-keynote',
  templateUrl: './keynote.component.html',
  styleUrls: ['./keynote.component.scss']
})
export class KeynoteComponent implements OnInit {
  public additionalInfoVisible = false;
  @Input() person!: keynote;

  temporder!: number;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
    public toggleCountService: ToggleCountService
  ) { }

  ngOnInit(): void {
    this.temporder = this.person.order; 
  }

  toggleAdditionalInfo(): void {
    const hostElement = this.elementRef.nativeElement;
    const parentElement = hostElement.parentNode as HTMLElement;
    const order = this.person.order;

    if (window.innerWidth > 1000) {
      if (!this.additionalInfoVisible) {
        this.renderer.setStyle(hostElement, 'grid-column', '1 / -1');

        if (order % 3 === 2 || order % 3 === 1) {
          // Naprawić buda przy więcej niż 3 otwartych dodatkowych informacji
          parentElement.insertBefore(hostElement, parentElement.children[this.closestdevideby3(this.temporder) + this.toggleCountService.getNumberOfToggles()] );
        }
        this.toggleCountService.incrementToggleCount();
      } else {
        this.toggleCountService.decrementToggleCount();
        parentElement.insertBefore(hostElement, parentElement.children[order + 1]);
        this.renderer.removeStyle(hostElement, 'grid-column');
      }
      console.log("current order: " + order);
    }

    this.additionalInfoVisible = !this.additionalInfoVisible;
  }

  closestdevideby3(n: number): number {
    const reszta = n % 3;
    if (reszta === 0) {
      return n;
    } else if (reszta === 1) {
      return n - 1;
    } else {
      return n - 2;
    }
  }
}