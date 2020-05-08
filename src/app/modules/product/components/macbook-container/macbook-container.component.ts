import { Component, OnInit } from '@angular/core';
import { ProductE } from '../../models/product.enum';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-macbook-container',
  templateUrl: './macbook-container.component.html',
  styleUrls: ['./macbook-container.component.scss'],
  animations: [
      trigger('show-up', [
        state('move', style({
         opacity: 1
        })),
        transition('void => move', [
          animate('3s')
        ])
      ]),
      trigger('move-up-image', [
        state('move', style({
          'margin-top': '-7vh',
        })),
        transition('void => move', [
          animate('1s')
        ])
      ]),
      trigger('move-up-subscriber', [
        state('move', style({
          'margin-top': '-12vh',
        })),
        transition('void => move', [
          animate('1s')
        ])
      ]),
    ]
})
export class MacbookContainerComponent implements OnInit {

  productSelected: ProductE = ProductE.Macbook;

  state = '';

  constructor() { }

  ngOnInit(): void {
    this.state = 'move';
  }

}
