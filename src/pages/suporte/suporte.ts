import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';


@IonicPage()
@Component({
  selector: 'page-suporte',
  templateUrl: 'suporte.html',
})
export class SuportePage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private iab: InAppBrowser
    ) {
  }


  whatsapp(){

    const options: InAppBrowserOptions = {
      zoom: 'no',
      location: 'yes'
    }
  let url = "https://api.whatsapp.com/send?phone=553125552526";
   const browser = this.iab.create(url, '_system', options);

  }


  email(){

    window.open("mailto:suporte.afx@gmail.com", '_system');

}

}
