import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroPowerColorService {

  constructor() { }

  colorPicker(power: string | undefined) {
    if(typeof power === "string") {
      if (power.toLowerCase() === 'bodybuilding') {
        return 'text-c5';
      } else if (power.toLowerCase() === 'healthy life') {
        return 'text-c4';
      } else if (power.toLowerCase() === 'bulking') {
        return 'text-c6';
      } else {
        return 'text-c3';
      }
    } else {
      return 'text-c3';
    }
  }
}
