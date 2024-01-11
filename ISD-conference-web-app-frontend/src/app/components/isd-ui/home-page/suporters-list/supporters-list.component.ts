import { Component, OnInit } from '@angular/core';
import { SUPPORTERS } from './supporters-list.constants';
import { Supporter } from 'src/app/interfaces/Supporter';

@Component({
  selector: 'isd-supporters-list',
  templateUrl: './supporters-list.component.html',
  styleUrls: ['./supporters-list.component.scss']
})
export class SupportersListComponent implements OnInit {
  readonly SUPPORTERS: Supporter[] = SUPPORTERS;

  constructor() { }

  ngOnInit(): void {
  }

}
