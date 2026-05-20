import { Router } from '@angular/router';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import { emailUniqueValidator } from './validators/email-unique.validators';
import { passwordMatchValidator } from './validators/password-match.validators';

@Component({
  selector: 'app-singup-page',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './singup-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class SingupPage {

  private fb = inject(FormBuilder);
  private router = inject(Router);

  form = this.fb.group({

    email: [
      '',
      [Validators.required, Validators.email],
      [emailUniqueValidator()]
    ],

    password: [
      '',
      [Validators.required, Validators.minLength(6)]
    ],

    confirmPassword: [
      '',
      [Validators.required]
    ],

  }, {
    validators: passwordMatchValidator
  });

  onSubmit() {

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    console.log('datos del formulario', this.form.value);

    this.router.navigate(['/']);
  }

  get email() {
    return this.form.get('email') as FormControl;
  }

  get password() {
    return this.form.get('password') as FormControl;
  }

  get confirmPassword() {
    return this.form.get('confirmPassword') as FormControl;
  }
}
