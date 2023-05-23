import {Component, Input} from '@angular/core';
import {HeroModel} from "../../models/hero.model";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() hero?: HeroModel;
  @Input() powerTextColor?: string;
}
