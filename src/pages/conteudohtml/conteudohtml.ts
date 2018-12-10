import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';


@IonicPage()
@Component({
  selector: 'page-conteudohtml',
  templateUrl: 'conteudohtml.html',
  providers: [
    ApiProvider
  ]
})
export class ConteudohtmlPage {
  public lista: any;
  loader: any;
  public ID: any = this.navParams.get("id");

  public HEADER: any;
  public OLEO_LR: any;
  public OLEO_CO: any;
  public OLEO_IT: any;
  public OLEOT_CA: any;
  public OLEO_CA: any;
  public OLEOT_IT: any;
  public FLUIDOF_CA: any;
  public FLUIDOF_IT: any;
  public DIRECAOH_CA: any;
  public DIRECAOH_IT: any;
  public SISTEMADEAM_CA: any;
  public SISTEMADEAM_IT: any;


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public ApiProvider: ApiProvider,
    public loadingCtrl: LoadingController,
    ) {
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

  ionViewDidLoad() {

    this.AbreCarregando();
    this.ApiProvider.GetConteudosId(this.ID).subscribe(data=>{

       const response = (data as any);
       const objeto_retorno = JSON.parse(response._body);

         this.lista = objeto_retorno.DADOS;

     this.HEADER = this.lista.HEADER;
     this.OLEO_LR = this.lista.OLEO_LR;
     this.OLEO_CO = this.lista.OLEO_CO;
     this.OLEO_IT = this.lista.OLEO_IT;
     this.OLEOT_CA = this.lista.OLEOT_CA;
     this.OLEO_CA = this.lista.OLEO_CA;
     this.OLEOT_IT = this.lista.OLEOT_IT;
     this.FLUIDOF_CA = this.lista.FLUIDOF_CA;
     this.FLUIDOF_IT = this.lista.FLUIDOF_IT;
     this.DIRECAOH_CA = this.lista.DIRECAOH_CA;
     this.DIRECAOH_IT = this.lista.DIRECAOH_IT;
     this.SISTEMADEAM_CA = this.lista.SISTEMADEAM_CA;
     this.SISTEMADEAM_IT = this.lista.SISTEMADEAM_IT;




      this.FechaCarregando();

   },error=>{
     console.log(error);
     this.FechaCarregando();
   }

   )

  }

}
