import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddonSelectableComponent } from './addon-selectable.component';

describe('AddonSelectableComponent', () => {
  let component: AddonSelectableComponent;
  let fixture: ComponentFixture<AddonSelectableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddonSelectableComponent],
    });
    fixture = TestBed.createComponent(AddonSelectableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
