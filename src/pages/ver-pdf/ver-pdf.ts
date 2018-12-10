import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';




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
    private sanitizer: DomSanitizer
    ) {
      this.pdfLink = this.sanitizer.bypassSecurityTrustResourceUrl('http://bnctecnologia.com.br/afx/gerador/viewer.php?file=http://bnctecnologia.com.br/afx/arquivos/conteudos/'+this.ID);
  }





  ionViewDidEnter() {
  }

}
