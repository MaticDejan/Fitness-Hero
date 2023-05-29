import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroPowerColorService {

  constructor() {
  }

  public colorPicker(power: string | undefined) {
    if (typeof power === "string") {
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

  public backgroundColorPicker(power: string | undefined) {
    if (typeof power === "string") {
      if (power.toLowerCase() === 'bodybuilding') {
        return 'bg-c5/[.80]';
      } else if (power.toLowerCase() === 'healthy life') {
        return 'bg-c4/[.80]';
      } else if (power.toLowerCase() === 'bulking') {
        return 'bg-c6/[.80]';
      } else {
        return 'bg-c3/[.80]';
      }
    } else {
      return 'bg-c3/[.80]';
    }
  }
}
