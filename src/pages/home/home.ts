import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { otherPage } from '../otherPage/otherPage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

}
