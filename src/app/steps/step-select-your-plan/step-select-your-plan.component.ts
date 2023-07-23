import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { PriceService } from '../price.service';
import { Plan } from '../plan';

@Component({
  selector: 'app-step-select-your-plan',
  templateUrl: './step-select-your-plan.component.html',
  styleUrls: ['./step-select-your-plan.component.css'],
})
export class StepSelectYourPlanComponent implements OnInit {
  formGroup;

  Plan = Plan;

  @Input()
  defaultValue?: {
    plan: Plan;
    yearly: boolean;
  };

  @Output()
  handleSubmit = new EventEmitter<{
    plan: Plan;
    yearly: boolean;
  }>();

  @Output()
  back = new EventEmitter<{
    plan: Plan;
    yearly: boolean;
  }>();

  constructor(formBuilder: FormBuilder, public priceService: PriceService) {
    this.formGroup = formBuilder.group({
      plan: Plan.Arcade,
      yearly: false,
    });
  }

  ngOnInit() {
    if (this.defaultValue) this.formGroup.patchValue(this.defaultValue);
  }

  onArcadeClick() {
    this.formGroup.patchValue({ plan: Plan.Arcade });
  }

  onAdvancedClick() {
    this.formGroup.patchValue({ plan: Plan.Advanced });
  }

  onProClick() {
    this.formGroup.patchValue({ plan: Plan.Pro });
  }

  onMonthlyClick() {
    this.formGroup.patchValue({ yearly: false });
  }

  onYearlyClick() {
    this.formGroup.patchValue({ yearly: true });
  }

  onBackClick() {
    this.back.emit({
      plan: this.formGroup.value.plan ?? Plan.Arcade,
      yearly: !!this.formGroup.value.yearly,
    });
  }

  onSubmit() {
    this.handleSubmit.emit({
      plan: this.formGroup.value.plan ?? Plan.Arcade,
      yearly: !!this.formGroup.value.yearly,
    });
  }
}
