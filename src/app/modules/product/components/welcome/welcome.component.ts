import { Component, OnInit } from '@angular/core';
import { ProductE } from '../../models/product.enum';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  productSelected: ProductE = ProductE.None;

  constructor() { }

  ngOnInit(): void {
  }

}
