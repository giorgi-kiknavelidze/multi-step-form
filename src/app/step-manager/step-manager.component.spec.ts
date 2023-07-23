import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepManagerComponent } from './step-manager.component';

describe('StepManagerComponent', () => {
  let component: StepManagerComponent;
  let fixture: ComponentFixture<StepManagerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StepManagerComponent],
    });
    fixture = TestBed.createComponent(StepManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
