import { Component, Input, OnInit } from '@angular/core';
import { Chair } from 'src/app/interfaces/Chair';
import { faOrcid, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'isd-chairs-list-item',
  templateUrl: './chairs-list-item.component.html',
  styleUrls: ['./chairs-list-item.component.scss']
})
export class ChairsListItemComponent implements OnInit {
  @Input() chair!: Chair;
  readonly ORCID_ICON = faOrcid;
  readonly LINKEDIN_ICON = faLinkedin;
  readonly EMAIL_ICON = faEnvelope;

  constructor() { }

  ngOnInit(): void {
  }

}
