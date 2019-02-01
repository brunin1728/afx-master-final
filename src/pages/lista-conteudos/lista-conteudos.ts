import { ConteudohtmlPage } from './../conteudohtml/conteudohtml';
import { VerPdfPage } from './../ver-pdf/ver-pdf';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { Searchbar } from 'ionic-angular';
import { InAppBrowserOptions, InAppBrowser } from '@ionic-native/in-app-browser';




@IonicPage()
@Component({
  selector: 'page-lista-conteudos',
  templateUrl: 'lista-conteudos.html',
  providers: [
    ApiProvider
  ]
})
export class ListaConteudosPage {
   public lista: any;
  loader: any;
  public CAT: any = this.navParams.get("id");
  public ATIVACAO: any = localStorage.getItem('ATIVACAO');
  public ID = localStorage.getItem('ID');


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public ApiProvider: ApiProvider,
    private iab: InAppBrowser,
    ) {
if(this.ATIVACAO === '1'){
  this.chamarlista();
}



  }

abrirPdf(id,tipo,arquivo){
if(tipo === '1'){
  this.navCtrl.push(ConteudohtmlPage, { id: id});
}else{
  this.navCtrl.push(VerPdfPage, { id: arquivo});
}
}

ativar(){
  const options: InAppBrowserOptions = {
    zoom: 'no',
    location: 'yes'
  }
let url = "http://afxconsult.top/admin/pagar/?id=" +  this.ID;
 const browser = this.iab.create(url, '_system', options);


}

  AbreCarregando() {
    this.loader = this.loadingCtrl.create({
      content: "Carregando..."
    });
    this.loader.present();
  }

FechaCarregando(){
  this.loader.dismiss();
}




chamarlista(){

  this.AbreCarregando();
  this.ApiProvider.GetConteudos(this.CAT).subscribe(data=>{

     const response = (data as any);
     const objeto_retorno = JSON.parse(response._body);

       this.lista = objeto_retorno.DADOS;

//console.log(this.lista[0]['STATUS']);

if(this.lista[0]['STATUS'] === '1'){
this.lista = objeto_retorno.DADOS;
}else{
alert("Não existe conteúdos para essa categoria!");
}


    this.FechaCarregando();

 },error=>{
   console.log(error);
   this.FechaCarregando();
 }

 )


}


getItems(ev: any) {
  // Reset items back to all of the items


  // set val to the value of the searchbar
  const val = ev.target.value;

  // if the value is an empty string don't filter the items
  if (val && val.trim() != '') {
    this.lista = this.lista.filter((item) => {
      return (item.TITULO.toLowerCase().indexOf(val.toLowerCase()) > -1);
    })
  }else{
    this.chamarlista();
  }
}











ionViewDidEnter() {


}
}




