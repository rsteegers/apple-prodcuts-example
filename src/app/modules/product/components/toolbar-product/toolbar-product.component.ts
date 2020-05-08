import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Logout } from 'src/app/modules/security/store/security.actions';
import * as fromSecurity from 'src/app/modules/security/store/security';
import { Router, NavigationEnd } from '@angular/router';
import { ProductE } from '../../models/product.enum';


@Component({
  selector: 'app-toolbar-product',
  templateUrl: './toolbar-product.component.html',
  styleUrls: ['./toolbar-product.component.scss']
})
export class ToolbarProductComponent implements OnInit {

  productSelected: ProductE = ProductE.None;

  constructor(
    private store: Store<fromSecurity.State>,
    private router: Router
  ) {
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.setProductSelected(val.url);
      }
    });

  }

  ngOnInit(): void {
  }

  logout() {
    this.store.dispatch(Logout());
  }

  setProductSelected(url: string) {
    if (url.indexOf('/products/iphone') > -1) {
      this.productSelected = ProductE.Iphone;
    } else if (url.indexOf('/products/macbook') > -1) {
      this.productSelected = ProductE.Macbook;
    } else if (url.indexOf('/products/watch') > -1) {
      this.productSelected = ProductE.Watch;
    } else {
      this.productSelected = ProductE.None;
    }
  }
}
