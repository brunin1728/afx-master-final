import { SuportePage } from './../suporte/suporte';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListaConteudosPage } from '../lista-conteudos/lista-conteudos';
import swal from 'sweetalert';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FiltromPage } from '../filtrom/filtrom';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public ATIVACAO: any = localStorage.getItem('ATIVACAO');
  public ID = localStorage.getItem('ID');
  public CAT: any;


  constructor(
    public navCtrl: NavController,
    private iab: InAppBrowser,
    public splashScreen: SplashScreen,
    ) {
      splashScreen.hide();
  }


ativar(){
  const options: InAppBrowserOptions = {
    zoom: 'no',
    location: 'yes'
  }
let url = "https://www.afxconsult.tk/admin/pagar/?id=" +  this.ID;
 const browser = this.iab.create(url, '_system', options);


}


abrir(id){
  this.navCtrl.push(FiltromPage, { id: id});
}

  abrir_ABTIGO(id){
    this.navCtrl.setRoot(ListaConteudosPage, { id: id});
  }

  suporte(){
    this.navCtrl.push(SuportePage);
  }



}
