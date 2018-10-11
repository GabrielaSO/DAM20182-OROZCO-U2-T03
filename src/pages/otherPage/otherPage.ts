import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
    selector: 'page-other',
    templateUrl: 'otherPage.html',
})

export class OtherPage {
    constructor(public navCtrl: NavController, 
        public navParams:
        NavParams) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad OtherPage');
    }

    goBack() {
        this.navCtrl.pop();
    }
}