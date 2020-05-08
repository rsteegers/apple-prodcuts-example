import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IphoneContainerComponent } from './components/iphone-container/iphone-container.component';
import { MacbookContainerComponent } from './components/macbook-container/macbook-container.component';
import { WatchContainerComponent } from './components/watch-container/watch-container.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ProductLayoutComponent } from './components/product-layout/product-layout.component';


const routes: Routes = [
  {
    path: '',
    component: ProductLayoutComponent,
    children: [
      {path: 'welcome', component: WelcomeComponent},
      {
        path: 'iphone', component: IphoneContainerComponent
      },
      {
        path: 'macbook', component: MacbookContainerComponent
      },
      {
        path: 'watch', component: WatchContainerComponent
      },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
