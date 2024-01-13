import { Component, OnInit } from '@angular/core';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { isEmpty } from 'lodash-es';
import { Router } from '@angular/router';

@Component({
  selector: 'isd-twitts-list',
  templateUrl: './twitts-list.component.html',
  styleUrls: ['./twitts-list.component.scss']
})
export class TwittsListComponent implements OnInit {
  readonly NO_TWITTS_TEXT_HEADER = `Nothing to see here - yet`;
  readonly NO_TWITTS_TEXT_SUB_TEXT = `When they Tweet, their Tweets will show up here.`;
  readonly TWITTER_ICON = faXTwitter;
  readonly LINK_TO_ISD_TWITTER = 'https://twitter.com/isdconf?ref_src=twsrc%5Etfw%7Ctwcamp%5Eembeddedtimeline%7Ctwterm%5Escreen-name%3Aisdconf%7Ctwcon%5Es2';
  twitts!: any[];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  noTwitts = (): boolean => isEmpty(this.twitts);

  goToTwitter = (): void => {
    window.open(this.LINK_TO_ISD_TWITTER, '_blank');
  }
}
