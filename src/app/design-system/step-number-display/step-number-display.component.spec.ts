import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepNumberDisplayComponent } from './step-number-display.component';

describe('StepNumberDisplayComponent', () => {
  let component: StepNumberDisplayComponent;
  let fixture: ComponentFixture<StepNumberDisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StepNumberDisplayComponent],
    });
    fixture = TestBed.createComponent(StepNumberDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
