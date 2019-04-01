import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';


@IonicPage()
@Component({
  selector: 'page-abrirlink',
  templateUrl: 'abrirlink.html',
})
export class AbrirlinkPage {
   public Link: any = this.navParams.get("id");


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public sanitizer: DomSanitizer,
    private iab: InAppBrowser
    ) {

 this.abrir();

  }

  abrir(){

    const options: InAppBrowserOptions = {
      zoom: 'no',
      hideurlbar: 'yes',
      toolbarcolor: '#292929',
      closebuttoncolor: '#d6d6d6'
    }
  let url = this.Link;
   const browser = this.iab.create(url, '_blank', options);

  }


  ionViewDidEnter(){

  }

}
