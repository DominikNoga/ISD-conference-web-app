import { Component, Input, OnInit } from '@angular/core';
import { Track } from 'src/app/interfaces/Track';

@Component({
  selector: 'isd-tracks-list-item',
  templateUrl: './tracks-list-item.component.html',
  styleUrls: ['./tracks-list-item.component.scss']
})
export class TracksListItemComponent implements OnInit {
  @Input() track!: Track;
  
  constructor() { }

  ngOnInit(): void {
  }

}
