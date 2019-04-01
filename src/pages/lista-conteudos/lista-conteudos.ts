import { FiltromPage } from './../filtrom/filtrom';
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
let url = this.ApiProvider.baseUrl + "/admin/pagar/?id=" +  this.ID;
 const browser = this.iab.create(url, '_system', options);


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








filtro(){
  this.navCtrl.push(FiltromPage, { id: this.CAT});
}





chamarlista(newpage: boolean = false){


  this.AbreCarregando();
  this.ApiProvider.GetConteudos(this.CAT,this.page).subscribe(data=>{

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
alert("Não existe conteúdos para essa categoria!");
}


    this.FechaCarregando();
    if(this.isRefreshing){
      this.refresher.complete();
      this.isRefreshing = false;
      console.log("zdfsa");

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
      return (item.TAGS.toLowerCase().indexOf(val.toLowerCase()) > -1);
    })
  }else{
    this.chamarlista();
  }
}











ionViewDidEnter() {


}
}




