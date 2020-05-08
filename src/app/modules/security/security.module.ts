import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { SecurityRoutingModule } from './security-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { SecurityEffects } from './store/security.effects';
import * as fromSecurity from './store/security.reducer';
import { SecurityLayoutComponent } from './components/security-layout/security-layout.component';
import { ToolbarSecurityComponent } from './components/toolbar-security/toolbar-security.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    SecurityLayoutComponent,
    ToolbarSecurityComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    StoreModule.forFeature(fromSecurity.securityFeatureKey, fromSecurity.securityReducer),
    EffectsModule.forFeature([SecurityEffects]),

    CoreModule,
    SharedModule,
    SecurityRoutingModule,
  ]
})
export class SecurityModule { }
