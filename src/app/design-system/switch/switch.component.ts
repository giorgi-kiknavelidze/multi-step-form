import { Component, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: SwitchComponent,
      multi: true,
    },
  ],
})
export class SwitchComponent implements ControlValueAccessor {
  onChange?: (arg: unknown) => void;
  onTouched?: () => void;

  @Input()
  value = false;

  toggle() {
    this.value = !this.value;
    this.onChange?.(this.value);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  writeValue(newValue: any): void {
    if (newValue !== undefined) {
      this.value = newValue;
    }
  }
}
