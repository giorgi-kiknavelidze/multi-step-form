import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepThankYouComponent } from './step-thank-you.component';

describe('StepThankYouComponent', () => {
  let component: StepThankYouComponent;
  let fixture: ComponentFixture<StepThankYouComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StepThankYouComponent],
    });
    fixture = TestBed.createComponent(StepThankYouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
