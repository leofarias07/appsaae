import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetalhesContaPage } from '../detalhes-conta/detalhes-conta';

/**
 * Generated class for the ContasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contas',
  templateUrl: 'contas.html',
})
export class ContasPage {
  contas = [
    {instalacao:1001,numero_fatura:9879797987979,competencia:"Fevereiro/2018",valor:"R$ 30,90",vencimento:"28/02/2018",situacao:"Fatura Paga"},
    {instalacao:1002,numero_fatura:9879797987979,competencia:"Março/2018",valor:"R$ 30,90",vencimento:"28/02/2018",situacao:"Fatura Paga"},
    {instalacao:1003,numero_fatura:9879797987979,competencia:"Maio/2018",valor:"R$ 30,90",vencimento:"28/02/2018",situacao:"Fatura Paga"},
    {instalacao:1004,numero_fatura:9879797987979,competencia:"Abril/2018",valor:"R$ 30,90",vencimento:"28/02/2018",situacao:"Fatura Paga"},
  ];
 
    constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContasPage');
  }

  abreDetalhe(item){
    this.navCtrl.push(DetalhesContaPage,{dados:item});
  }

}
