import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepFinishingUpComponent } from './step-finishing-up.component';

describe('StepFinishingUpComponent', () => {
  let component: StepFinishingUpComponent;
  let fixture: ComponentFixture<StepFinishingUpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StepFinishingUpComponent],
    });
    fixture = TestBed.createComponent(StepFinishingUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
