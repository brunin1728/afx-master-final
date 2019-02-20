import { FiltromodelPage } from './../filtromodel/filtromodel';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';


@IonicPage()
@Component({
  selector: 'page-filtrom',
  templateUrl: 'filtrom.html',
})
export class FiltromPage {
  public lista: any;
  loader: any;
  public toppings: any;
  public CATEGORIA = this.navParams.get('id');



  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public ApiProvider: ApiProvider,
    public loadingCtrl: LoadingController,
    ) {
      this.chamarlista();
  }

  abrir(id){

    this.navCtrl.push(FiltromodelPage, { id: id, cat: this.CATEGORIA});
  }



  filtro() {


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
  this.ApiProvider.getfiltro().subscribe(data=>{

     const response = (data as any);
     const objeto_retorno = JSON.parse(response._body);

       this.lista = objeto_retorno.DADOS;





    this.FechaCarregando();

 },error=>{
   console.log(error);
   this.FechaCarregando();
 }

 )
}



  ionViewDidEnter() {


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













}
