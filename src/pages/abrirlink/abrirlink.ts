import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';


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
    public sanitizer: DomSanitizer
    ) {
  }


  ionViewDidLoad() {

  }

}
