import { Http } from '@angular/http';
import { Injectable } from '@angular/core';


@Injectable()
export class ApiProvider {

  private baseApi = "https://api.afxconsult.top/";

  constructor(public http: Http) {

  }
    GetConteudos(id){
      return this.http.get(this.baseApi + 'index.php?r=categorias&id=' + id);
     }

    GetConteudosId(id){
      return this.http.get(this.baseApi + 'index.php?r=conteudo&id=' + id);
     }


    login(usuario,senha){
      return this.http.get(this.baseApi + 'usuario.php?acao=login&USUARIO=' + usuario + '&SENHA=' + senha);
     }


    cadastro(usuario,senha,email,nome){
      return this.http.get(this.baseApi + 'usuario.php?acao=cadastrar&USUARIO=' + usuario + '&SENHA=' + senha + '&EMAIL=' + email + '&NOME=' + nome);
     }


     GetCategorias(){
      return this.http.get(this.baseApi + 'index.php?r=categoria');
     }

     verifica(usuario){
      return this.http.get(this.baseApi + 'usuario.php?acao=ativacao&USUARIO=' + usuario);
     }


}
