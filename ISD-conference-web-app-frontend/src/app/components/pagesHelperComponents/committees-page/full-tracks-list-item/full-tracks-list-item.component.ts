import { Component, Input, OnInit } from '@angular/core';
import { Track } from 'src/app/interfaces/Track';

@Component({
  selector: 'isd-full-tracks-list-item',
  templateUrl: './full-tracks-list-item.component.html',
  styleUrls: ['./full-tracks-list-item.component.scss']
})
export class FullTracksListItemComponent implements OnInit {
  @Input() track!: Track;

  constructor() { }

  ngOnInit(): void {
  }

}
