import { Component, OnInit, Input } from '@angular/core';
import { ProductE } from '../../models/product.enum';

@Component({
  selector: 'app-product-selector',
  templateUrl: './product-selector.component.html',
  styleUrls: ['./product-selector.component.scss']
})
export class ProductSelectorComponent implements OnInit {

  @Input() productSelected: ProductE = ProductE.Iphone;
  @Input() vertical = true;

  constructor() { }

  ngOnInit(): void {
  }

}
