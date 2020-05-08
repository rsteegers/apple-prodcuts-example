import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-circle-button',
  templateUrl: './custom-circle-button.component.html',
  styleUrls: ['./custom-circle-button.component.scss']
})
export class CustomCircleButtonComponent implements OnInit {

  @Input() label = '';
  @Input() selected = false;
  @Input() color = 'rgb(248,248,248, 0.16)';
  @Output() clicked = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(): void {
    this.clicked.emit();
  }
}
