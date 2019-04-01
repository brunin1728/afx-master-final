import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowserOptions, InAppBrowser } from '@ionic-native/in-app-browser';
import { ApiProvider } from '../../providers/api/api';


@IonicPage()
@Component({
  selector: 'page-ativar',
  templateUrl: 'ativar.html',
})
export class AtivarPage {
  public ID = localStorage.getItem('ID');
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private iab: InAppBrowser,
    public ApiProvider: ApiProvider,
    ) {
  }




  ativar(){
    const options: InAppBrowserOptions = {
      zoom: 'no',
      location: 'yes'
    }
  let url = this.ApiProvider.baseUrl + "/admin/pagar/?id=" +  this.ID;
   const browser = this.iab.create(url, '_system', options);


  }











  ionViewDidLoad() {

  }

}
