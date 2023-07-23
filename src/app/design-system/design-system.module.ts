import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonDirective } from './button.directive';
import { TextInputDirective } from './text-input.directive';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { StepNumberDisplayComponent } from './step-number-display/step-number-display.component';
import { SwitchComponent } from './switch/switch.component';
import { SelectableWithIconComponent } from './selectable-with-icon/selectable-with-icon.component';
import { AddonSelectableComponent } from './addon-selectable/addon-selectable.component';

@NgModule({
  declarations: [
    ButtonDirective,
    TextInputDirective,
    CheckboxComponent,
    StepNumberDisplayComponent,
    SwitchComponent,
    SelectableWithIconComponent,
    AddonSelectableComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    ButtonDirective,
    TextInputDirective,
    CheckboxComponent,
    StepNumberDisplayComponent,
    SwitchComponent,
    SelectableWithIconComponent,
    AddonSelectableComponent,
  ],
})
export class DesignSystemModule {}
