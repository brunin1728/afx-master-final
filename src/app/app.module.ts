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

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ListaConteudosPage,
    VerPdfPage,
    ConteudohtmlPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ListaConteudosPage,
    VerPdfPage,
    ConteudohtmlPage
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
