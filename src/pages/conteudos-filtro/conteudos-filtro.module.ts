import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConteudosFiltroPage } from './conteudos-filtro';

@NgModule({
  declarations: [
    ConteudosFiltroPage,
  ],
  imports: [
    IonicPageModule.forChild(ConteudosFiltroPage),
  ],
})
export class ConteudosFiltroPageModule {}
