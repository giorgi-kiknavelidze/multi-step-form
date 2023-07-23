import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Plan } from '../plan';
import { PlanSelection } from '../plan-selection';
import { PriceService } from '../price.service';

@Component({
  selector: 'app-step-finishing-up',
  templateUrl: './step-finishing-up.component.html',
  styleUrls: ['./step-finishing-up.component.css'],
})
export class StepFinishingUpComponent {
  @Input()
  planSelection: PlanSelection = {
    plan: Plan.Arcade,
    yearly: false,
    onlineService: true,
    largerStorage: true,
    customizableProfile: true,
  };

  constructor(public priceService: PriceService) {}

  @Output()
  changeClick = new EventEmitter<void>();

  @Output()
  back = new EventEmitter<void>();

  @Output()
  handleSubmit = new EventEmitter<void>();

  onChangeClick() {
    this.changeClick.emit();
  }

  onBackClick() {
    this.back.emit();
  }

  onSubmit() {
    this.handleSubmit.emit();
  }
}
