import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.scss']
})
export class SubscribeComponent implements OnInit {

  @Output() email = new EventEmitter();

  public validationsForm: FormGroup;
  validationMessages = {
    emailAddress: [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Please enter a valid email.' }
    ]
  };


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.validationsForm = this.formBuilder.group({
      emailAddress: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
        ])
      )
    });
  }

  trySubmit(form): void {
    form.reset();
    this.email.emit(form.value);
  }
}
