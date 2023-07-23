import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepSelectYourPlanComponent } from './step-select-your-plan.component';

describe('StepSelectYourPlanComponent', () => {
  let component: StepSelectYourPlanComponent;
  let fixture: ComponentFixture<StepSelectYourPlanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StepSelectYourPlanComponent],
    });
    fixture = TestBed.createComponent(StepSelectYourPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
