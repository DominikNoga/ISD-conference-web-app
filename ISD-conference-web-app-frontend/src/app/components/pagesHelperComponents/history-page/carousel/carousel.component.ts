import { Component,Input, OnInit } from '@angular/core';
import { EVENTS } from "src/app/components/pagesHelperComponents/history-page/past-conferences-list/past-conferences-list.constants"
import { ConferenceEvent } from "src/app/interfaces/ConferenceEvent";
import { faChevronUp, faEnvelope, faHouse, faLightbulb, faLocationDot, faArrowLeft,faArrowRight, faBook, faIgloo } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'isd-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  @Input() events!: ConferenceEvent[];
  @Input() indicators = true;
  @Input() controls = true;

  houseIcon = faHouse;
  locationIcon = faLocationDot;
  lightbulbIcon = faLightbulb;
  faArrowLeft = faArrowLeft;
  faArrowRight = faArrowRight;
  bookIcon=faBook;
  iglooIcon=faIgloo;

  selectedIndex=0;

  constructor() { }

  ngOnInit(): void {
  }

  selectTile(index:number):void{
    this.selectedIndex = index;
  }

  onPrevClick():void{
    if(this.selectedIndex===0){
      this.selectedIndex = this.events.length-1;
    }
    else{
      this.selectedIndex--;
    }
  }

  onNextClick():void{
    if(this.selectedIndex===this.events.length-1){
      this.selectedIndex = 0;
    }
    else{
      this.selectedIndex++;
    }
  }

}
