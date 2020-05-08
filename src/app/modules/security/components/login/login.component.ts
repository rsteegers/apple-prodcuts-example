import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { Login } from 'src/app/core/models';
import { Auth } from '../../store/security.actions';
import * as fromSecurity from '../../store/security';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public validationsForm: FormGroup;
  errorMessage: any = '';
  validationMessages = {
    email: [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Please enter a valid email.' }
    ],
    password: [
      { type: 'required', message: 'Password is required.' },
      {
        type: 'minlength',
        message: 'Password must be at least 5 characters long.'
      }
    ]
  };

  constructor(
    private store: Store<fromSecurity.State>,
    private formBuilder: FormBuilder
  ) {
    this.store.select(fromSecurity.getLoginError()).subscribe(error => {
      this.errorMessage = error;
    });
  }

  ngOnInit() {
    this.validationsForm = this.formBuilder.group({
      email: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
        ])
      ),
      password: new FormControl(
        '',
        Validators.compose([Validators.minLength(5), Validators.required])
      )
    });
  }

  trySubmit(value: Login) {
    this.store.dispatch(Auth(value));
  }
}
