import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroPowerColorService {

  constructor() { }

  colorPicker(power: string | undefined) {
    if(typeof power === "string") {
      if (power.toLowerCase() === 'bodybuilding') {
        return 'c6';
      } else if (power.toLowerCase() === 'healthy life') {
        return 'c4';
      } else if (power.toLowerCase() === 'bulking') {
        return 'c5';
      } else {
        return 'c3';
      }
    } else {
      return 'c3';
    }
  }
}
