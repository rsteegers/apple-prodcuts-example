import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-custom-card',
  templateUrl: './custom-card.component.html',
  styleUrls: ['./custom-card.component.scss']
})
export class CustomCardComponent implements OnInit {

  @Input() productName = 'Product Name';
  @Input() title = 'Title';
  @Input() subtitle = 'Subtitle';
  @Input() mode2 = false;

  constructor() { }

  ngOnInit(): void {
  }

}
