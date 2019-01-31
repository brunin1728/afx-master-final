import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';




@IonicPage()
@Component({
  selector: 'page-pagina-html',
  templateUrl: 'pagina-html.html',
})
export class PaginaHtmlPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private iab: InAppBrowser
    ) {
  }




  abrir(){
    const options: InAppBrowserOptions = {
      zoom: 'no',
      location: 'no'
    }

   const browser = this.iab.create('http://afxconsult.top/admin/arquivos/conteudos-html/teste1/index.htm', '_blank', options);



  }




}
