import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListaConteudosPage } from '../lista-conteudos/lista-conteudos';
import swal from 'sweetalert';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public ATIVACAO = localStorage.getItem('ATIVACAO');
  public ID = localStorage.getItem('ID');



  constructor(
    public navCtrl: NavController,
    private iab: InAppBrowser
    ) {

  }

ativar(){
  const options: InAppBrowserOptions = {
    zoom: 'no',
    location: 'yes'
  }
let url = "http://afxconsult.top/admin/pagar/?id=" +  this.ID;
 const browser = this.iab.create(url, '_system', options);


}

  abrir(id){
    this.navCtrl.setRoot(ListaConteudosPage, { id: id});
  }


}
