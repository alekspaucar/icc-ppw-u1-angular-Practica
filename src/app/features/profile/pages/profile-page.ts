// src/app/features/profile/pages/profile-page.ts

import { Component, inject } from '@angular/core';

import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { FormUtils } from '../../../shared/utils/from-utils';



@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './profile-page.html',
})

export default class ProfilePage {

  private fb = inject(FormBuilder);

  formUtils = FormUtils;

  myForm: FormGroup = this.fb.group({

    nombre: [
      '',
      [
        Validators.required,
        Validators.minLength(3)
      ]
    ],

    edad: [
      0,
      [
        Validators.required,
        Validators.min(18)
      ]
    ],

    correo: [
      '',
      [
        Validators.required,
        Validators.email
      ]
    ]

  });

  onSubmit() {

    this.myForm.markAllAsTouched();

    if (this.myForm.invalid) return;

    console.log(this.myForm.value);
  }

  get nombre() {
    return this.myForm.get('nombre') as FormControl;
  }

  get edad() {
    return this.myForm.get('edad') as FormControl;
  }

  get correo() {
    return this.myForm.get('correo') as FormControl;
  }
}
