import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { PriceService } from '../price.service';
import { PlanSelection } from '../plan-selection';

@Component({
  selector: 'app-step-pick-addons',
  templateUrl: './step-pick-addons.component.html',
  styleUrls: ['./step-pick-addons.component.css'],
})
export class StepPickAddonsComponent implements OnInit {
  formGroup;

  @Input()
  defaultValue?: PlanSelection;

  @Output()
  handleSubmit = new EventEmitter<{
    onlineService: boolean;
    largerStorage: boolean;
    customizableProfile: boolean;
  }>();

  @Output()
  back = new EventEmitter<{
    onlineService: boolean;
    largerStorage: boolean;
    customizableProfile: boolean;
  }>();

  constructor(formBuilder: FormBuilder, public priceService: PriceService) {
    this.formGroup = formBuilder.group({
      onlineService: false,
      largerStorage: false,
      customizableProfile: false,
    });
  }

  ngOnInit() {
    if (this.defaultValue) this.formGroup.patchValue(this.defaultValue);
  }

  onBackClick() {
    this.back.emit({
      onlineService: this.formGroup.value.onlineService ?? false,
      largerStorage: this.formGroup.value.largerStorage ?? false,
      customizableProfile: this.formGroup.value.customizableProfile ?? false,
    });
  }

  onSubmit() {
    this.handleSubmit.emit({
      onlineService: this.formGroup.value.onlineService ?? false,
      largerStorage: this.formGroup.value.largerStorage ?? false,
      customizableProfile: this.formGroup.value.customizableProfile ?? false,
    });
  }
}
