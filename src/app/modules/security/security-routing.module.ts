import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoreModule } from 'src/app/core/core.module';

import { LoginComponent } from './components/login/login.component';
import { SecurityLayoutComponent } from './components/security-layout/security-layout.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {
    path: '',
    component: SecurityLayoutComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },
    ]
  },
];

@NgModule({
  imports: [
    CoreModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class SecurityRoutingModule { }
