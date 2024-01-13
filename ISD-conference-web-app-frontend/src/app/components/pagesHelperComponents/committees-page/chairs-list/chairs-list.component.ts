import { Component, Input, OnInit } from '@angular/core';
import { Chair } from 'src/app/interfaces/Chair';

@Component({
  selector: 'isd-chairs-list',
  templateUrl: './chairs-list.component.html',
  styleUrls: ['./chairs-list.component.scss']
})
export class ChairsListComponent implements OnInit {
  @Input() chairs!: Chair[];
  @Input() listId!: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
