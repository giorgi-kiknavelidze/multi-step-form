import { Injectable } from '@angular/core';
import { Plan } from './plan';
import { PlanSelection } from './plan-selection';

type AddonsOnly = Omit<Omit<PlanSelection, 'plan'>, 'yearly'>;

@Injectable({
  providedIn: 'root',
})
export class PriceService {
  private getPlanPrice(plan: Plan) {
    const planMonthlyPrices = {
      Arcade: 9,
      Advanced: 12,
      Pro: 15,
    };

    return plan in planMonthlyPrices
      ? planMonthlyPrices[plan as keyof typeof planMonthlyPrices]
      : 0;
  }

  private getAddonsTotalPrice(addons: AddonsOnly) {
    return (
      (addons.onlineService ? 1 : 0) +
      (addons.largerStorage ? 2 : 0) +
      (addons.customizableProfile ? 2 : 0)
    );
  }

  getPrice(selectedItems: Partial<PlanSelection>) {
    return (
      ((selectedItems.plan ? this.getPlanPrice(selectedItems.plan) : 0) +
        this.getAddonsTotalPrice(selectedItems)) *
      (selectedItems.yearly ? 10 : 1)
    );
  }

  getPriceForUI(selectedItems: Partial<PlanSelection>, withPlusSign = false) {
    return `${withPlusSign ? '+' : ''}$${this.getPrice(selectedItems)}/${
      selectedItems.yearly ? 'yr' : 'mo'
    }`;
  }
}
