import { Component, OnInit } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';
import { ProductE } from '../../models/product.enum';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-watch-container',
  templateUrl: './watch-container.component.html',
  styleUrls: ['./watch-container.component.scss'],
  animations: [
    trigger('move-card', [
      state('move', style({
        'margin-left': '0',
        'margin-right': '0',
      })),
      transition('void => move', [
        animate('1s')
      ])
    ]),
    trigger('move-watch', [
      state('move', style({
        'margin-left': '0',
        'margin-right': '0',
      })),
      transition('void => move', [
        animate('1s')
      ])
    ]),
    trigger('move-up', [
      state('move', style({
        'margin-top': '-20vh',
      })),
      transition('void => move', [
        animate('1s')
      ])
    ]),
  ]
})
export class WatchContainerComponent implements OnInit {

  productSelected: ProductE = ProductE.Watch;

  // Product info price
  productInfoPrice = 669;

  // Custom card
  customCardProductName = 'Apple Watch';
  customCardtitle = 'Change starts within';
  customCardSubtitle = `Apple Watch Series 4. Fundamentally redesigned and re-engineered to help you be even more active, health, and connected`;

  // Change image
  changeImageFirstImageUrl = 'assets/images/watch/White Watch-2@2x.png';
  changeImageSecondImageUrl = 'assets/images/watch/Black Watch-1@2x.png';

  // Change image selector
  whiteSelectorColor = 'rgb(248,248,248, 0.16)';
  whiteSelectorLabel = 'White';
  blackSelectorColor = 'black';
  blackSelectorLabel = 'Black';
  firstImageSelected = false;

  state = '';

  constructor() { }

  ngOnInit(): void {
    this.state = 'move';
  }

  onClickSelector(firstImageSelected: boolean): void {
    this.firstImageSelected = firstImageSelected;
  }

}
