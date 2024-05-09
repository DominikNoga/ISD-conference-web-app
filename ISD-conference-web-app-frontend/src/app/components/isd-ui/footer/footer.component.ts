import { Component, OnInit } from '@angular/core';
import { faChevronUp, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'isd-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  upIcon = faChevronUp;
  twitterIcon = faTwitter;
  emailIcon = faEnvelope;

  constructor() { }

  ngOnInit(): void {
  }

  scrollToElement(event: Event, elementId: string): void {
    event.preventDefault();
    const element = document.getElementById(elementId);
    console.log(element)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

}
