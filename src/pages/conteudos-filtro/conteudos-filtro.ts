import { SuportePage } from './../suporte/suporte';
import { AbrirlinkPage } from './../abrirlink/abrirlink';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { ConteudohtmlPage } from '../conteudohtml/conteudohtml';
import { VerPdfPage } from '../ver-pdf/ver-pdf';



@IonicPage()
@Component({
  selector: 'page-conteudos-filtro',
  templateUrl: 'conteudos-filtro.html',
})
export class ConteudosFiltroPage {
  public lista: any;
  loader: any;
  public MODEL: any = this.navParams.get("id");
  public CAT: any = this.navParams.get("cat");
  public ATIVACAO: any = localStorage.getItem('ATIVACAO');
  public ID = localStorage.getItem('ID');
  public lista2: any;

  public refresher;
  public isRefreshing: boolean = false;
  public page = 1;
  public infiniteScroll;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public ApiProvider: ApiProvider,
    public alertCtrl: AlertController
    ) {
if(this.ATIVACAO === '1'){
  this.chamarlista();

}



  }

abrirPdf(id,tipo,arquivo,link){
if(tipo === '1'){
  this.navCtrl.push(ConteudohtmlPage, { id: id});
}else if(tipo === '0'){
  this.navCtrl.push(VerPdfPage, { id: arquivo});
}else if(tipo === '2'){
  this.navCtrl.push(AbrirlinkPage, { id: link});
}
}



  AbreCarregando() {
    this.loader = this.loadingCtrl.create({
      content: "Carregando conteúdos..."
    });
    this.loader.present();
  }

FechaCarregando(){
  this.loader.dismiss();
}


doRefresh(refresher) {
  this.refresher = refresher;
  this.isRefreshing = true;

  this.chamarlista();
}


doInfinite(infiniteScroll) {
  this.page++;
  this.infiniteScroll = infiniteScroll;
  this.chamarlista(true);

}





chamarlista(newpage: boolean = false){

//console.log(this.MODEL);

  this.AbreCarregando();
  this.ApiProvider.GetConteudosF(this.MODEL,this.CAT,this.page).subscribe(data=>{

     const response = (data as any);
     const objeto_retorno = JSON.parse(response._body);




       if(newpage){
        this.lista = this.lista.concat(objeto_retorno.DADOS);

       this.infiniteScroll.complete();
      }else{
        this.lista = objeto_retorno.DADOS;


      }





if(this.lista[0]['STATUS'] === '1'){

}else{
//alert("Não foi possível encontrar um conteúdo com essas informações.");
this.showConfirm();
}


    this.FechaCarregando();
    if(this.isRefreshing){
      this.refresher.complete();
      this.isRefreshing = false;


    }


 },error=>{
   console.log(error);
   this.FechaCarregando();
   if(this.isRefreshing){
    this.refresher.complete();
    this.isRefreshing = false;
  }
 }

 )


}







//FILTRO DE PESQUISA POR PALAVRA
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













showConfirm() {
  const confirm = this.alertCtrl.create({
    title: '',
    message: 'Este Conteúdo não esta disponível em nosso formato. Entre em contato com o suporte Técnico.',
    buttons: [
      {
        text: "Suporte técnico",
        handler: () => {
          this.navCtrl.push(SuportePage);
        }
      }
    ],
    cssClass: 'alertCustomCss'
  });
  confirm.present();
}






}
