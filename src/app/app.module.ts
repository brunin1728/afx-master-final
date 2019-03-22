import { AbrirlinkPage } from './../pages/abrirlink/abrirlink';
import { TermosusoPage } from './../pages/termosuso/termosuso';
import { ConteudosFiltroPage } from './../pages/conteudos-filtro/conteudos-filtro';
import { FiltromPage } from './../pages/filtrom/filtrom';
import { FiltromodelPage } from './../pages/filtromodel/filtromodel';
import { SuportePage } from './../pages/suporte/suporte';
import { CadastroPage } from './../pages/cadastro/cadastro';
import { LoginPage } from './../pages/login/login';
import { ConteudohtmlPage } from './../pages/conteudohtml/conteudohtml';
import { VerPdfPage } from './../pages/ver-pdf/ver-pdf';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ListaConteudosPage } from '../pages/lista-conteudos/lista-conteudos';
import { ApiProvider } from '../providers/api/api';
import { HttpModule } from '@angular/http';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { PaginaHtmlPage } from '../pages/pagina-html/pagina-html';
import { BrMaskerModule } from 'brmasker-ionic-3';
import { FiltroPage } from '../pages/filtro/filtro';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ListaConteudosPage,
    VerPdfPage,
    ConteudohtmlPage,
    LoginPage,
    CadastroPage,
    PaginaHtmlPage,
    SuportePage,
    FiltroPage,
    FiltromodelPage,
    FiltromPage,
    ConteudosFiltroPage,
    TermosusoPage,
    AbrirlinkPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    BrMaskerModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ListaConteudosPage,
    VerPdfPage,
    ConteudohtmlPage,
    LoginPage,
    CadastroPage,
    PaginaHtmlPage,
    SuportePage,
    FiltroPage,
    FiltromodelPage,
    FiltromPage,
    ConteudosFiltroPage,
    TermosusoPage,
    AbrirlinkPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiProvider,
    InAppBrowser
  ]
})
export class AppModule {}
