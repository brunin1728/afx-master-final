import { AtivarPage } from './../pages/ativar/ativar';
import { FiltroPage } from './../pages/filtro/filtro';
import { PaginaHtmlPage } from './../pages/pagina-html/pagina-html';
import { LoginPage } from './../pages/login/login';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ApiProvider } from '../providers/api/api';
import { ListaConteudosPage } from '../pages/lista-conteudos/lista-conteudos';
import { FiltromPage } from '../pages/filtrom/filtrom';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  public ETAPA: any;
  rootPage: any;
  private IF_ETAPA = localStorage.getItem('ETAPA') ? localStorage.getItem('ETAPA').length : null;
  private NOME1 = localStorage.getItem('NOME') ? localStorage.getItem('NOME').length : null;
   pages: Array<{title: string, component: any}>;
   public ATIVACAO1 = localStorage.getItem('ATIVACAO') ? localStorage.getItem('ATIVACAO').length : 0;
   public ATIVACAO: any;
   public lista: any;
   public ATIVO: any;
   public USER: any;
   public NOME: any;


   vernome(){
     if(this.NOME1){
      this.NOME = localStorage.getItem('NOME');
     }
   }

  etapas(){

    this.ETAPA = localStorage.getItem('ETAPA');

    if(this.IF_ETAPA == null){
       this.rootPage = LoginPage;
    }else{

       if(this.ETAPA == '1'){

      this.rootPage = HomePage;
    }

    }

  }



  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public ApiProvider: ApiProvider,
    ) {

  this.vernome();
  this.verificar();
  this.chamarlista();
  this.etapas();
  this.initializeApp();
  this.ativar();


  }

  ativar(){
    if(this.ATIVACAO1){
      this.ATIVACAO = localStorage.getItem('ATIVACAO');
      }else{
        this.ATIVACAO = 0;
      }

    if(this.ATIVACAO == '1'){
      this.pages = [
        { title: 'Início', component: HomePage }
      ];
    }else{
      this.pages = [
        { title: 'Início', component: HomePage },
        { title: 'Ativar Plano', component: AtivarPage },
      ];
    }

  }


verificar(){
  this.USER = this.ETAPA = localStorage.getItem('USUARIO');
  this.ApiProvider.verifica(this.USER).subscribe(data=>{

    const response = (data as any);
    const objeto_retorno = JSON.parse(response._body);

      this.ATIVO = objeto_retorno.DADOS;

      localStorage.setItem("ATIVACAO", this.ATIVO.ATIVACAO);



},error=>{
  console.log(error);

})
}



  chamarlista(){


    this.ApiProvider.GetCategorias().subscribe(data=>{

       const response = (data as any);
       const objeto_retorno = JSON.parse(response._body);

         this.lista = objeto_retorno.DADOS;

  this.lista = objeto_retorno.DADOS;

//  console.log(this.lista);


   },error=>{
     console.log(error);

   }

   )


  }




















  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();

    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  openPage2(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.push(FiltromPage, { id: page});
  }

  sair() {
    localStorage.clear();
    this.nav.setRoot(LoginPage);
  }



}
