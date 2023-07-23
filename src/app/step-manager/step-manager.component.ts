import { Component } from '@angular/core';
import { Plan } from '../steps/plan';
import { PlanSelection } from '../steps/plan-selection';
import { PersonalInfo } from '../steps/personal-info';

@Component({
  selector: 'app-step-manager',
  templateUrl: './step-manager.component.html',
  styleUrls: ['./step-manager.component.css'],
})
export class StepManagerComponent {
  currentStep = 0;

  personalInfo?: PersonalInfo;

  planSelection = { plan: Plan.Arcade, yearly: false };

  getCurrentStep() {
    return this.currentStep;
  }

  getCurrentStepForSidebar() {
    return Math.min(this.currentStep, 3);
  }

  onChangeClick() {
    this.currentStep = 1;
  }

  onBackClick() {
    this.currentStep = this.currentStep - 1;
  }

  onPersonalInputSubmit(newPersonalInfo: PersonalInfo) {
    this.currentStep++;
    this.personalInfo = newPersonalInfo;
  }

  onSelectYourPlanBackClick(newPlanSelection: PlanSelection) {
    this.currentStep--;
    this.planSelection = { ...this.planSelection, ...newPlanSelection };
  }

  onPickAddonsBackClick(newPlanSelection: Partial<PlanSelection>) {
    this.currentStep--;
    this.planSelection = { ...this.planSelection, ...newPlanSelection };
  }

  onSelectYourPlanSubmit(newPlanSelection: PlanSelection) {
    this.currentStep++;
    this.planSelection = { ...this.planSelection, ...newPlanSelection };
  }

  onPickAddonsSubmit(newPlanSelection: Partial<PlanSelection>) {
    this.currentStep++;
    this.planSelection = { ...this.planSelection, ...newPlanSelection };
  }

  onFinishingUpSubmit() {
    this.currentStep++;
  }
}
