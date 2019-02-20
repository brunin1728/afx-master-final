import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CadastroPage } from '../cadastro/cadastro';


@IonicPage()
@Component({
  selector: 'page-termosuso',
  templateUrl: 'termosuso.html',
})
export class TermosusoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  cadastre(){
    this.navCtrl.push(CadastroPage);
  }


}
