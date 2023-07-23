import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepPickAddonsComponent } from './step-pick-addons.component';

describe('StepPickAddonsComponent', () => {
  let component: StepPickAddonsComponent;
  let fixture: ComponentFixture<StepPickAddonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StepPickAddonsComponent],
    });
    fixture = TestBed.createComponent(StepPickAddonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
