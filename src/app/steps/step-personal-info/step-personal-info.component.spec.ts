import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepPersonalInfoComponent } from './step-personal-info.component';

describe('StepPersonalInfoComponent', () => {
  let component: StepPersonalInfoComponent;
  let fixture: ComponentFixture<StepPersonalInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StepPersonalInfoComponent],
    });
    fixture = TestBed.createComponent(StepPersonalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
