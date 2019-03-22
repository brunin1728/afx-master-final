import { Http } from '@angular/http';
import { Injectable } from '@angular/core';


@Injectable()
export class ApiProvider {

  private baseApi = "https://www.afxconsult.tk/admin/app/";
  private baseUrl = "https://www.afxconsult.tk";

  constructor(public http: Http) {

  }
    GetConteudos(id,page = 1){
      return this.http.get(this.baseApi + 'index.php?r=categorias&id=' + id + "&page=" + page);
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

     getfiltro(){
      return this.http.get(this.baseApi + 'index.php?r=filtro');
     }


     filtro1(m){

      return this.http.get(this.baseApi + 'index.php?r=filtro1&id=' + m);
     }


     GetConteudosF(id,cat,page = 1){
      return this.http.get(this.baseApi + 'index.php?r=FiltroCont&id=' + id + "&cat=" + cat + "&page=" + page);
     }


}
