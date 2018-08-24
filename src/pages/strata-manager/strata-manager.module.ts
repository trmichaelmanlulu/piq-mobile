import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StrataManagerPage } from './strata-manager';

@NgModule({
  declarations: [
    StrataManagerPage,
  ],
  imports: [
    IonicPageModule.forChild(StrataManagerPage),
  ],
})
export class StrataManagerPageModule {}
