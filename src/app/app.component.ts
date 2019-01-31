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

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  public ETAPA: any;
  rootPage: any;
  private IF_ETAPA = localStorage.getItem('ETAPA') ? localStorage.getItem('ETAPA').length : null;
   pages: Array<{title: string, component: any}>;
   public ATIVACAO1 = localStorage.getItem('ATIVACAO') ? localStorage.getItem('ATIVACAO').length : 0;
   public ATIVACAO: any;
   public lista: any;



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
        { title: 'Início', component: HomePage },
        { title: 'Teste Html Externo', component: PaginaHtmlPage },
      ];
    }else{
      this.pages = [
        { title: 'Início', component: HomePage },
        { title: 'Ativar Plano', component: HomePage },
      ];
    }

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
    this.nav.setRoot(ListaConteudosPage, { id: page});
  }


}
