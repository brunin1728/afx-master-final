import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaConteudosPage } from './lista-conteudos';

@NgModule({
  declarations: [
    ListaConteudosPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaConteudosPage),
  ],
})
export class ListaConteudosPageModule {}
