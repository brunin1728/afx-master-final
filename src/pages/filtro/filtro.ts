import { FiltromPage } from './../filtrom/filtrom';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';



@IonicPage()
@Component({
  selector: 'page-filtro',
  templateUrl: 'filtro.html',
  providers: [
    ApiProvider
  ]
})
export class FiltroPage {
  public lista: any;
  loader: any;
  public toppings: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public ApiProvider: ApiProvider,
    public loadingCtrl: LoadingController,
    ) {
  }

  abrir(id){
    this.navCtrl.push(FiltromPage, { id: id});
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

  ionViewDidEnter() {

    this.AbreCarregando();
    this.ApiProvider.GetCategorias().subscribe(data=>{

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

}
