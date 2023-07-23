import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectableWithIconComponent } from './selectable-with-icon.component';

describe('SelectableWithIconComponent', () => {
  let component: SelectableWithIconComponent;
  let fixture: ComponentFixture<SelectableWithIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectableWithIconComponent],
    });
    fixture = TestBed.createComponent(SelectableWithIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
