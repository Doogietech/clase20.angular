import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  urlApi= 'https://jsonplaceholder.typicode.com/users'
  constructor(
    private http: HttpClient
  ) {
   console.log('Service usuarios');
  }

  getUsuarios(){
    let header = new HttpHeaders()
    .set('Type-content', 'aplication/json')
    
    return this.http.get(this.urlApi, {
      headers: header
    });
  }
}








// import { Injectable } from '@angular/core';
// import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
// import { Observable, throwError } from 'rxjs';
// import { catchError } from 'rxjs/operators';
// import { Router } from '@angular/router';

// @Injectable({
//   providedIn: 'root'
// })

// export class AuthInterceptorService implements HttpInterceptor {

//   constructor(
//     private router: Router
//   ) {}

//   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  
//     const token:any  = localStorage.getItem('token');

//     let request = req;

//     if (token) {
//       request = req.clone({
//         setHeaders: {
//           authorization: `Bearer ${ token }`
//         }
//       });
//     }

//     return next.handle(request).pipe(
//       catchError((err: HttpErrorResponse) => {

//         if (err.status === 401) {
//           this.router.navigateByUrl('/login');
//         }

//         return throwError( err );

//       })
//     );
//   }

// }
