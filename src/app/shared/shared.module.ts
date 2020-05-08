import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDividerModule } from '@angular/material/divider';
import { MatRadioModule } from '@angular/material/radio';
import { MatListModule } from '@angular/material/list';
import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';

import { SharedRoutingModule } from './shared-routing.module';
import { SwitchImagePositionComponent } from './components/switch-image-position/switch-image-position.component';
import { CustomCardComponent } from './components/custom-card/custom-card.component';
import { SwitchImageOpacityComponent } from './components/switch-image-opacity/switch-image-opacity.component';
import { ChangeImageComponent } from './components/change-image/change-image.component';
import { CustomCircleButtonComponent } from './components/custom-circle-button/custom-circle-button.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SubscribeComponent } from './components/subscribe/subscribe.component';


@NgModule({
  declarations: [
    SwitchImagePositionComponent,
    CustomCardComponent,
    SwitchImageOpacityComponent,
    ChangeImageComponent,
    CustomCircleButtonComponent,
    SubscribeComponent
  ],
  imports: [
    MatButtonModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatListModule,
    MatSliderModule,
    MatExpansionModule,
    MatMenuModule,
    MatRadioModule,
    MatDialogModule,
    MatChipsModule,
    MatInputModule,
    MatIconModule,
    MatSidenavModule,
    MatSelectModule,
    MatTabsModule,
    MatDividerModule,
    MatCardModule,
    MatSliderModule,

    CommonModule,
    SharedRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    MatButtonModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatListModule,
    MatSliderModule,
    MatExpansionModule,
    MatMenuModule,
    MatRadioModule,
    MatDialogModule,
    MatChipsModule,
    MatInputModule,
    MatIconModule,
    MatSidenavModule,
    MatSelectModule,
    MatTabsModule,
    MatDividerModule,
    MatCardModule,

    CustomCardComponent,
    SwitchImagePositionComponent,
    SwitchImageOpacityComponent,
    ChangeImageComponent,
    CustomCircleButtonComponent,
    SubscribeComponent
  ]
})
export class SharedModule {}
