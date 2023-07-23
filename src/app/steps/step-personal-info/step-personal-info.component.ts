import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PersonalInfo } from '../personal-info';

@Component({
  selector: 'app-step-personal-info',
  templateUrl: './step-personal-info.component.html',
  styleUrls: ['./step-personal-info.component.css'],
})
export class StepPersonalInfoComponent implements OnInit {
  formGroup;
  triedtoSubmit = false;

  @Input()
  defaultValue?: PersonalInfo;

  @Output()
  handleSubmit = new EventEmitter<PersonalInfo>();

  constructor(formBuilder: FormBuilder) {
    this.formGroup = formBuilder.group({
      name: ['', [Validators.required, Validators.pattern(/^[A-z\s]+$/)]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: [
        '',
        [Validators.required, Validators.pattern(/^\+?[0-9\s]+$/)],
      ],
    });
  }

  ngOnInit() {
    if (this.defaultValue) this.formGroup.patchValue(this.defaultValue);
  }

  getNameError() {
    if (this.formGroup.get('name')?.hasError('required'))
      return 'This field is required';
    if (this.formGroup.get('name')?.hasError('pattern')) return 'Invalid name';
    return '';
  }

  getEmailError() {
    if (this.formGroup.get('email')?.hasError('required'))
      return 'This field is required';
    if (this.formGroup.get('email')?.hasError('email')) return 'Invalid email';
    return '';
  }

  getPhoneNumberError() {
    if (this.formGroup.get('phoneNumber')?.hasError('required'))
      return 'This field is required';
    if (this.formGroup.get('phoneNumber')?.hasError('pattern'))
      return 'Invalid phone number';
    return '';
  }

  onSubmit() {
    this.triedtoSubmit = true;
    if (this.formGroup.valid) {
      this.handleSubmit.emit({
        name: this.formGroup.value.name ?? '',
        email: this.formGroup.value.email ?? '',
        phoneNumber: this.formGroup.value.phoneNumber ?? '',
      });
    }
  }
}
