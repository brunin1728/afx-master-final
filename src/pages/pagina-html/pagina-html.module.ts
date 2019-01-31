import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PaginaHtmlPage } from './pagina-html';

@NgModule({
  declarations: [
    PaginaHtmlPage,
  ],
  imports: [
    IonicPageModule.forChild(PaginaHtmlPage),
  ],
})
export class PaginaHtmlPageModule {}
