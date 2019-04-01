import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import { ApiProvider } from '../../providers/api/api';



@IonicPage()
@Component({
  selector: 'page-ver-pdf',
  templateUrl: 'ver-pdf.html',
})
@Pipe({ name: 'noSanitize' })
export class VerPdfPage implements PipeTransform {
  transform(value: any, ...args: any[]) {
    throw new Error("Method not implemented.");
  }

  public ID: any = this.navParams.get("id");

  public pdfLink: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private sanitizer: DomSanitizer,
    public ApiProvider: ApiProvider,
    ) {
      console.log(this.ID);

      this.pdfLink = this.ApiProvider.baseUrl + "/admin/arquivos/conteudos/"+this.ID;
  }





  ionViewDidEnter() {
  }

}
