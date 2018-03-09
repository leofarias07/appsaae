import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetalhesContaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalhes-conta',
  templateUrl: 'detalhes-conta.html',
})
export class DetalhesContaPage {

  item = {};
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.item = this.navParams.get('dados');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalhesContaPage');
  }

}
