import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() hero?: any;
  @Input() powerTextColor?: string;
  @Input() backgroundColor?: string;

  hovered = false;
}
