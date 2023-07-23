import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StepPersonalInfoComponent } from './step-personal-info/step-personal-info.component';
import { DesignSystemModule } from '../design-system/design-system.module';
import { StepSelectYourPlanComponent } from './step-select-your-plan/step-select-your-plan.component';
import { StepPickAddonsComponent } from './step-pick-addons/step-pick-addons.component';
import { StepFinishingUpComponent } from './step-finishing-up/step-finishing-up.component';
import { StepThankYouComponent } from './step-thank-you/step-thank-you.component';

@NgModule({
  declarations: [
    StepPersonalInfoComponent,
    StepSelectYourPlanComponent,
    StepPickAddonsComponent,
    StepFinishingUpComponent,
    StepThankYouComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, DesignSystemModule],
  exports: [
    StepPersonalInfoComponent,
    StepSelectYourPlanComponent,
    StepPickAddonsComponent,
    StepFinishingUpComponent,
    StepThankYouComponent,
  ],
})
export class StepsModule {}
