import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { ApiProvider } from '../../providers/api/api';




@IonicPage()
@Component({
  selector: 'page-pagina-html',
  templateUrl: 'pagina-html.html',
})
export class PaginaHtmlPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private iab: InAppBrowser,
    public ApiProvider: ApiProvider,
    ) {
  }




  abrir(){
    const options: InAppBrowserOptions = {
      zoom: 'no',
      location: 'no'
    }

   const browser = this.iab.create(this.ApiProvider.baseUrl + '/admin/arquivos/conteudos-html/teste1/index.htm', '_blank', options);



  }




}
