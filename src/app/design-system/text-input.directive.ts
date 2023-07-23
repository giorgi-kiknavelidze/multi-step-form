import { Directive, HostBinding, Input } from '@angular/core';
import { clsx } from 'clsx';

type TextInputVariantType = 'primary' | 'error';

@Directive({
  selector: '[appTextInput]',
})
export class TextInputDirective {
  @Input() variant: TextInputVariantType = 'primary';

  @HostBinding('class')
  get additionalClasses() {
    return clsx({
      'font-ubuntu font-bold px-4 py-2 placeholder:text-neutral-cool rounded-md text-primary-marine border-[1px] outline-0 focus:ring-0':
        true,
      'border-neutral-light focus:border-primary-marine':
        this.variant === 'primary',
      'border-primary-strawberry': this.variant === 'error',
    });
  }
}
