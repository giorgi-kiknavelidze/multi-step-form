import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-step-number-display',
  templateUrl: './step-number-display.component.html',
  styleUrls: ['./step-number-display.component.css'],
})
export class StepNumberDisplayComponent {
  @Input()
  active = false;

  @Input()
  value = 0;
}
