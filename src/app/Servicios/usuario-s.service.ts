import { Injectable } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UsuarioSService {

  export class UsuariosService {

    private apiURI: String = "https://jsonplaceholder.typicode.com/users"
    }
    constructor(private http: HttpClientModule) {
      
    }
  }

}
