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
    {instalacao:1001,competencia:"Fevereiro/2018",valor:"R$ 30,90",vencimento:"28/02/2018",codigo_barras:"8465000001-9 67490024030-2 30031020342-1 11708041802-3",situacao:"Fatura Paga"},
    {instalacao:1002,competencia:"Março/2018",valor:"R$ 30,90",vencimento:"28/02/2018",codigo_barras:"8465000001-9 67490024030-2 30031020342-1 11708041802-3",situacao:"Fatura Paga"},
    {instalacao:1003,competencia:"Abril/2018",valor:"R$ 30,90",vencimento:"28/02/2018",codigo_barras:"8465000001-9 67490024030-2 30031020342-1 11708041802-3",situacao:"Fatura Paga"},
    {instalacao:1004,competencia:"Maio/2018",valor:"R$ 30,90",vencimento:"28/02/2018",codigo_barras:"8465000001-9 67490024030-2 30031020342-1 11708041802-3",situacao:"Fatura Paga"},
    {instalacao:1004,competencia:"Junho/2018",valor:"R$ 30,90",vencimento:"28/02/2018",codigo_barras:"8465000001-9 67490024030-2 30031020342-1 11708041802-3",situacao:"Fatura Paga"},
    {instalacao:1004,competencia:"Julho/2018",valor:"R$ 30,90",vencimento:"28/02/2018",codigo_barras:"8465000001-9 67490024030-2 30031020342-1 11708041802-3",situacao:"Fatura Paga"},
    {instalacao:1004,competencia:"Agosto/2018",valor:"R$ 30,90",vencimento:"28/02/2018",codigo_barras:"8465000001-9 67490024030-2 30031020342-1 11708041802-3",situacao:"Fatura Paga"},
    {instalacao:1004,competencia:"Outubro/2018",valor:"R$ 30,90",vencimento:"28/02/2018",codigo_barras:"8465000001-9 67490024030-2 30031020342-1 11708041802-3",situacao:"Fatura Paga"},
    {instalacao:1004,competencia:"Setembro/2018",valor:"R$ 30,90",vencimento:"28/02/2018",codigo_barras:"8465000001-9 67490024030-2 30031020342-1 11708041802-3",situacao:"Fatura Paga"},
    {instalacao:1004,competencia:"Novembro/2018",valor:"R$ 30,90",vencimento:"28/02/2018",codigo_barras:"8465000001-9 67490024030-2 30031020342-1 11708041802-3",situacao:"Fatura Paga"}
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
