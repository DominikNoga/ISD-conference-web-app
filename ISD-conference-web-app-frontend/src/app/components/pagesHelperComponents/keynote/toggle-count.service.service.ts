import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToggleCountService {
  private numberOfToggles = 0;

  constructor() { }

  getNumberOfToggles(): number {
    return this.numberOfToggles;
  }

  incrementToggleCount(): void {
    this.numberOfToggles++;
  }

  decrementToggleCount(): void {
    this.numberOfToggles--;
  }
}
