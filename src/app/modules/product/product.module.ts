import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { IphoneContainerComponent } from './components/iphone-container/iphone-container.component';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductInfoComponent } from './components/product-info/product-info.component';
import { ProductSelectorComponent } from './components/product-selector/product-selector.component';
import { WatchContainerComponent } from './components/watch-container/watch-container.component';
import { MacbookContainerComponent } from './components/macbook-container/macbook-container.component';
import { MacbookCardInfoComponent } from './components/macbook-card-info/macbook-card-info.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ProductLayoutComponent } from './components/product-layout/product-layout.component';
import { ToolbarProductComponent } from './components/toolbar-product/toolbar-product.component';


@NgModule({
  declarations: [
    IphoneContainerComponent,
    ProductInfoComponent,
    ProductSelectorComponent,
    WatchContainerComponent,
    MacbookContainerComponent,
    MacbookCardInfoComponent,
    WelcomeComponent,
    ProductLayoutComponent,
    ToolbarProductComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    SharedModule,
    MatSliderModule,
    MatButtonModule
  ]
})
export class ProductModule { }
