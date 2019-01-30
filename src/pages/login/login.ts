import { CadastroPage } from './../cadastro/cadastro';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import swal from 'sweetalert';
import { ApiProvider } from '../../providers/api/api';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [
    ApiProvider
  ]
})
export class LoginPage {

  public USUARIO: any;
  public SENHA: any;
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



cadastre(){
  this.navCtrl.push(CadastroPage);
}



  login() {


    this.AbreCarregando();
    this.ApiProvider.login(this.USUARIO,this.SENHA).subscribe(data=>{

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


    if(this.DADOS.ATIVACAO === '1'){
      window.location.reload();
    }else{
    this.navCtrl.setRoot(HomePage);
    }
    this.FechaCarregando();
  }else{
    this.FechaCarregando();
    swal("Algo deu errado...", "Verifique seu usuário ou senha e tente novamente.", "error");

  }




   },error=>{
     console.log(error);
     this.FechaCarregando();
   }

   )
  }

}
