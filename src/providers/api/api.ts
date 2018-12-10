import { Http } from '@angular/http';
import { Injectable } from '@angular/core';


@Injectable()
export class ApiProvider {

  private baseApi = "http://bnctecnologia.com.br/afx/app/index.php";

  constructor(public http: Http) {

  }
    GetConteudos(id){
      return this.http.get(this.baseApi + '?r=categorias&id=' + id);
     }

    GetConteudosId(id){
      return this.http.get(this.baseApi + '?r=conteudo&id=' + id);
     }


}
