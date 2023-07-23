import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css'],
})
export class CheckboxComponent {
  @Input()
  value = true;

  @Output()
  update = new EventEmitter<boolean>();

  handleOnClick() {
    this.value = !this.value;
    this.update.emit(this.value);
  }
}
