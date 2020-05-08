import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder, ValidationErrors, AbstractControl } from '@angular/forms';
import { Store } from '@ngrx/store';

import { Register } from 'src/app/core/models';
import { Registering } from '../../store/security.actions';
import * as fromSecurity from '../../store/security';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
public validationsForm: FormGroup;
  errorMessage: any = '';
  validationMessages = {
    email: [{ type: 'required', message: 'Email is required.' }],
    password: [
      { type: 'required', message: 'Password is required.' },
      {
        type: 'minlength',
        message: 'Password must be at least 6 characters long.'
      },
    ],
    repeatPassword: [
      {
        type: 'match',
        message: 'Password must match.'
      },
    ]
  };

  public static matchValues(
      matchTo: string // name of the control to match to
    ): (AbstractControl) => ValidationErrors | null {
      return (control: AbstractControl): ValidationErrors | null => {
        return !!control.parent &&
          !!control.parent.value &&
          control.value === control.parent.controls[matchTo].value
          ? null
          : { passwordsNotEqual: true };
      };
  }

  constructor(
    private store: Store<fromSecurity.State>,
    private formBuilder: FormBuilder,
  ) {
    this.store.select(fromSecurity.getRegisterError()).subscribe(error => {
      this.errorMessage = error;
    });
  }

  ngOnInit() {
    this.validationsForm = this.formBuilder.group({
      email: new FormControl(
        '',
        Validators.compose([Validators.minLength(5), Validators.required])
      ),
      password: new FormControl(
        '',
        Validators.compose([Validators.minLength(6), Validators.required])
      ),
      repeatPassword: new FormControl(
        '',
        Validators.compose([RegisterComponent.matchValues('password')]),
      )
    });
  }

  trySubmit(value: Register) {
    this.store.dispatch(Registering(value));
  }
}
