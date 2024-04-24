import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tile',
  template: `
    <div class="tile" (click)="toggleContent()">
      <h3>{{ title }}</h3>
      <div *ngIf="showContent" class="content">
        <p *ngFor="let paragraph of paragraphs">{{ paragraph }}</p>
        <h4>Track topics include (but are not strictly limited to):</h4>
        <ul>
          <li *ngFor="let topic of topics">{{ topic }}</li>
        </ul>
        <h4>Track Chairs:</h4>
        <p *ngFor="let chair of chairs" class="chair">{{ chair }}</p>
      </div>
    </div>
  `,
  styles: [`
    .tile {
      cursor: pointer;
      border: 3px solid #ccc;
      padding: 10px;
      margin: 0 auto; /* Center the tile horizontally */
      max-width: 63%; /* Set a maximum width for responsiveness */
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Optional subtle shadow */
    }

    .content {
      margin-top: 10px;
    }

    h3 {
      color: black;
    }

    h4 {
      color: black;
    }

    p {
      margin-bottom: 10px;
    }

    ul {
      list-style-type: disc;
      margin-bottom: 10px;
      padding: 25px;
    }

    .chair {
      margin: 3px 0; /* Zmniejszono odstęp między kolejnymi nowymi liniami */
    }
  `]
})
export class TileComponent {
  @Input() title: string = '';
  @Input() paragraphs: string[] = [];
  @Input() topics: string[] = [];
  @Input() chairs: string[] = [];
  showContent: boolean = false;

  toggleContent() {
    this.showContent = !this.showContent;
  }
}
