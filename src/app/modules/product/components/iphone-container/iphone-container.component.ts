import { Component, OnInit } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';
import { ProductE } from '../../models/product.enum';

@Component({
  selector: 'app-iphone-container',
  templateUrl: './iphone-container.component.html',
  styleUrls: ['./iphone-container.component.scss']
})
export class IphoneContainerComponent implements OnInit {

  productSelected: ProductE = ProductE.Iphone;

  sliderValue = 0;

  // Product info price
  productInfoPrice = 669;

  // Custom card
  customCardProductName = 'iPhone';
  customCardtitle = 'The ultimate iPhone';
  customCardSubtitle = 'Program to get the lastest iPhone -NOW! The future is here. Join the Iphone Upgrade';

  // Switch image opacity
  switchImageOpacityLeftImageUrl = 'assets/images/iphone/apple-iphonexs-max-gold@2x.png';
  switchImageOpacityRigthImageUrl = 'assets/images/iphone/apple-iphonexs-max-gold-back-2@2x.png';

  // Switch image position
  switchImagePositionLeftImageUrl = 'assets/images/iphone/Iphone 1.png';
  switchImagePositionRigthImageUrl = 'assets/images/iphone/apple-iphonexs-max-gold-back-2@2x.png';

  constructor() { }

  ngOnInit(): void {
  }

  onSliderInput(event: MatSliderChange): void {
    this.sliderValue = event.value;
  }
}
