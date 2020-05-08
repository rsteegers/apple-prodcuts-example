import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { AuthGuard, AlreadyAuthGuard } from './guards';


const routes: Routes = [
  {
    path: 'products',
    loadChildren: () => import('./modules/product/product.module').then(m => m.ProductModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'security',
    loadChildren: () => import('./modules/security/security.module').then(m => m.SecurityModule),
    canActivate: [AlreadyAuthGuard],
  },
  {
    path: '',
    redirectTo: '/security/login',
    pathMatch: 'full',
  },
  { path: '', redirectTo: 'security/login', pathMatch: 'full' },
  { path: '**', redirectTo: 'security/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
