import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowserOptions, InAppBrowser } from '@ionic-native/in-app-browser';


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
    ) {
  }




  ativar(){
    const options: InAppBrowserOptions = {
      zoom: 'no',
      location: 'yes'
    }
  let url = "http://afxconsult.tk/admin/pagar/?id=" +  this.ID;
   const browser = this.iab.create(url, '_system', options);


  }











  ionViewDidLoad() {

  }

}
