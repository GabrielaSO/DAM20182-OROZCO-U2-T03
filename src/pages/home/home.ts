import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OtherPage } from '../otherPage/otherPage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public myString: string = 'Ejemplo 1 - Esto es solo una cadena';
  public myJSON: any = { text: '' };
  otherPage: any = OtherPage;

  constructor(public navCtrl: NavController) {

  }

  gotoOtherPage() {
    this.navCtrl.push(OtherPage, {text: 'Ejemplo 3 - Esto es un objeto'});}

}
