import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FinancialStatementPage } from './financial-statement';

@NgModule({
  declarations: [
    FinancialStatementPage,
  ],
  imports: [
    IonicPageModule.forChild(FinancialStatementPage),
  ],
})
export class FinancialStatementPageModule {}
