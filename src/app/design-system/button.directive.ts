import { Directive, HostBinding, Input } from '@angular/core';
import { clsx } from 'clsx';

type ButtonVariantType = 'primary' | 'submit' | 'plain' | 'plainActive';

@Directive({
  selector: '[appButton]',
})
export class ButtonDirective {
  @Input() variant: ButtonVariantType = 'primary';

  @HostBinding('class')
  get additionalClasses() {
    return clsx({
      'font-ubuntu flex items-center justify-center rounded-md text-center py-2 px-5':
        true,
      'text-white bg-primary-marine active:bg-primary-alt-marine':
        this.variant === 'primary',
      'text-white bg-primary-purplish active:bg-primary-alt-purplish':
        this.variant === 'submit',
      'text-neutral-cool bg-white active:text-primary-marine':
        this.variant === 'plain',
      'text-primary-marine bg-white': this.variant === 'plainActive',
    });
  }
}
