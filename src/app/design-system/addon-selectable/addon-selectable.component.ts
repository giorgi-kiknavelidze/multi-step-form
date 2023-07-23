import { Component, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-addon-selectable',
  templateUrl: './addon-selectable.component.html',
  styleUrls: ['./addon-selectable.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: AddonSelectableComponent,
      multi: true,
    },
  ],
})
export class AddonSelectableComponent implements ControlValueAccessor {
  onChange?: (_arg: unknown) => void;
  onTouched?: () => void;

  value = false;

  @Input()
  addonName = '';
  @Input()
  description = '';
  @Input()
  price = '';

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
