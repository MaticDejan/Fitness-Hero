import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-text-container',
  templateUrl: './text-container.component.html',
  styleUrls: ['./text-container.component.css']
})
export class TextContainerComponent {
  @Input() text?: string;
  @Input() containerColor?: string;
}
