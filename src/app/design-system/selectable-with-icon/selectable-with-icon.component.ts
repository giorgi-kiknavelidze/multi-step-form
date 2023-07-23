import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-selectable-with-icon',
  templateUrl: './selectable-with-icon.component.html',
  styleUrls: ['./selectable-with-icon.component.css'],
})
export class SelectableWithIconComponent {
  @Input()
  icon = '';
  @Input()
  title = '';
  @Input()
  price = '';
  @Input()
  additionalText = '';
  @Input()
  value = false;

  @Output()
  clicked = new EventEmitter<MouseEvent>();

  handleOnClick(e: MouseEvent) {
    this.clicked.emit(e);
  }
}
