import { Component, ViewChild } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { SuperTabs } from 'ionic2-super-tabs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  pages = [
    { pageName: 'NewsfeedPage', title: 'Newsfeed', icon: 'flame', id: 'newsfeedPageTab'},
    { pageName: 'StrataManagerPage', title: 'Strata Manager', icon: 'flame', id: 'strataManagerTab'},
    { pageName: 'FinancialStatementPage', title: 'Financial Statement', icon: 'flame', id: 'financialStatementTab'}
  ]

  selectedTab = 0;

  @ViewChild(SuperTabs) superTabs: SuperTabs;

  constructor(public navCtrl: NavController, private alertCtrl: AlertController) {

  }

  onTabSelected(ev: any) {
    if (ev.index === 2) {
      let alert = this.alertCtrl.create({
        title: 'Secret page',
        message: 'Are you sure you want to access that page?',
        buttons: [
          {
            text: 'No',
            handler: () => {
              this.superTabs.slideTo(this.selectedTab);
            }
          },
          {
            text: 'Yes',
            handler: () => {
              this.selectedTab = ev.index;
            }
          }
        ]
      });
      alert.present();
    } else {
      this.selectedTab = ev.index;
      this.superTabs.clearBadge(this.pages[ev.index].id);
    }
  }

}
