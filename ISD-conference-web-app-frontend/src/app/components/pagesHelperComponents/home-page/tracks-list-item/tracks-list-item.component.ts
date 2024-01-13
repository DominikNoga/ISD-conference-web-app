import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'isd-tracks-list-item',
  templateUrl: './tracks-list-item.component.html',
  styleUrls: ['./tracks-list-item.component.scss']
})
export class TracksListItemComponent implements OnInit {
  @Input() track!: {
    order: number;
    title: string;
  };
  
  constructor() { }

  ngOnInit(): void {
  }

}
