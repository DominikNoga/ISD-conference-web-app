import { Component, OnInit, Input, ElementRef, Renderer2 } from '@angular/core';
import { keynote } from 'src/app/interfaces/keynote';

@Component({
  selector: 'isd-keynote',
  templateUrl: './keynote.component.html',
  styleUrls: ['./keynote.component.scss']
})
export class KeynoteComponent implements OnInit {
  public additionalInfoVisible = false;
  @Input() person!: keynote;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    
  }

  toggleAdditionalInfo(): void {
    console.log("Toggling additional info");
    const hostElement = this.elementRef.nativeElement;
    const parentElement = hostElement.parentNode as HTMLElement;
    const order = this.person.order;

    if (window.innerWidth > 1000)
      {
        if (!this.additionalInfoVisible) 
          {
          this.renderer.setStyle(hostElement, 'grid-column', '1 / -1');
          if (order % 3 === 2 || order % 3 === 1) {
            const firstChild = parentElement.firstChild;
            parentElement.insertBefore(hostElement, firstChild);
          }
        } 
        else {
          console.log("reset " + order);
          parentElement.insertBefore(hostElement, parentElement.children[order + 1]);
          this.renderer.removeStyle(hostElement, 'grid-column');
        }
      }

    this.additionalInfoVisible = !this.additionalInfoVisible;
  }
}
