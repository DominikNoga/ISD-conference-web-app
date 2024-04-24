import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { get } from 'lodash-es';
import { NavService } from 'src/app/services/nav/nav.service';

@Component({
  selector: 'isd-burger',
  templateUrl: './burger.component.html',
  styleUrls: ['./burger.component.scss']
})
export class BurgerComponent implements OnInit {
  readonly CLOSED = 'closed';
  readonly OPENED = 'opened';
  @Input() barsColor: string = 'white';
  @Input() animationClass!: string;
  @Output() onBurgerClick = new EventEmitter<void>();

  constructor(private navService: NavService) { }

  ngOnInit(): void {
    this.navService.animationClass$.subscribe(animationClass => {
      this.animationClass = animationClass;
    });
  }

  getAnimationClass = (className: string) => `${className}-${this.animationClass}`;

  onBurgerClickHandler = () => {
    this.onBurgerClick.emit();
  }
}
