import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import swal from 'sweetalert';
import { ApiProvider } from '../../providers/api/api';
import { HomePage } from '../home/home';


@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
  providers: [
    ApiProvider
  ]
})
export class CadastroPage {

  public USUARIO: any;
  public SENHA: any;
  public EMAIL: any;
  public NOME: any;
  public DADOS: any;
  loader: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public ApiProvider: ApiProvider,
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


cadastrar(){



  this.AbreCarregando();
  this.ApiProvider.cadastro(this.USUARIO,this.SENHA,this.EMAIL,this.NOME).subscribe(data=>{

     const response = (data as any);
     const objeto_retorno = JSON.parse(response._body);

       this.DADOS = objeto_retorno.DADOS;

//console.log(this.lista[0]['STATUS']);

if(this.DADOS.STATUS === '1'){
  console.log(this.DADOS);

  localStorage.setItem("ETAPA", "1");
  localStorage.setItem("NOME", this.DADOS.NOME);
  localStorage.setItem("USUARIO", this.DADOS.USUARIO);
  localStorage.setItem("EMAIL", this.DADOS.EMAIL);
  localStorage.setItem("ID", this.DADOS.ID);
  localStorage.setItem("ATIVACAO", this.DADOS.ATIVACAO);
  swal("Pronto!", "Você foi cadastrado com sucesso.", "success").then((value) => {
    this.navCtrl.setRoot(HomePage);
  });


  this.FechaCarregando();
}else{
  this.FechaCarregando();
  swal("Algo deu errado...", "Seu usuário ou e-mail já esta cadastrado, tente com outro e-mail ou usuário.", "error");

}




 },error=>{
   console.log(error);
   this.FechaCarregando();
 }

 )
}




}
