import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { EffectsModule } from '@ngrx/effects';

import { Effects } from './store/effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EffectsModule.forFeature([Effects]),
    CoreRoutingModule
  ]
})
export class CoreModule { }
