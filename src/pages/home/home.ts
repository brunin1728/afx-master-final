import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListaConteudosPage } from '../lista-conteudos/lista-conteudos';
import swal from 'sweetalert';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public ATIVACAO = localStorage.getItem('ATIVACAO');



  constructor(public navCtrl: NavController) {

  }

ativar(){
  localStorage.setItem("ATIVACAO", "1");
  swal("ATIVADO!", "Sua conta foi ativada com sucesso.", "success").then((value) => {
    window.location.reload();
  });


}

  abrir(id){
    this.navCtrl.setRoot(ListaConteudosPage, { id: id});
  }


}
