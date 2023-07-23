import { Plan } from './plan';

export interface PlanSelection {
  plan: Plan;
  onlineService?: boolean;
  largerStorage?: boolean;
  customizableProfile?: boolean;
  yearly: boolean;
}
