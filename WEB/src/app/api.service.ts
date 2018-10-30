import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,HttpParams} from  '@angular/common/http';
import {Curso} from './cursos/Curso';
import { Observable, range } from 'rxjs';
import {Http, Response, Headers} from '@angular/http';
import { _ } from 'ag-grid-community';
import { _createNgProbe } from '@angular/platform-browser/src/dom/debug/ng_probe';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { StorageService } from './storage.service';
import { Sesion } from './modelos/sesion.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' ,
   })
};
const params = new HttpParams()
  .set('cedula', '1111111');

@Injectable()
export class ApiService {
  API_URL  = 'http://localhost:8080/miudelar-server';   
    //'http://tsi-diego.eastus.cloudapp.azure.com:8080/miudelar-server';



constructor(private  httpClient:  HttpClient,private router: Router,
             private storage:StorageService) { }

public cedula = '1111111'; 

getAllCarrera(){
    return  this.httpClient.get(`${this.API_URL}/director/carrera`);
}

/*public getToken(){***********Se cambia por local storage
*/

getAllCursos(){
  return  this.httpClient.get(`${this.API_URL}/estudiante/curso`,{params});
}


getAllExamen(){
  return  this.httpClient.get(`${this.API_URL}/estudiante/curso`);
}

public getToken(){
  var sesion:Sesion = JSON.parse(localStorage.getItem('session'));
  return sesion!=null?sesion.token:null; 
}


intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

  request = request.clone({
    setHeaders: {
      Authorization: `Bearer ${this.getToken()}`
    }
  });

  return next.handle(request);
}

inscripcionCarrera(cedula,codigo){
var a: any = {};
a.cedula = cedula;
a.codigo = codigo;

  let json = JSON.stringify(a);
  console.log(json);
  return  this.httpClient.post(`${this.API_URL}/estudiante/inscripcionCarrera`,json, httpOptions);
}


inscripcionCurso(cedula,idCurso){
  var a: any = {};

  a.cedula = cedula;
  a.idCurso = idCurso;
  
    let json = JSON.stringify(a);
    console.log(json);
    return  this.httpClient.post(`${this.API_URL}/estudiante/inscripcionCurso`,json,httpOptions);
  }
  inscripcionExamen(cedula,idCurso){
    var a: any = {};

    a.cedula = cedula;
    a.idCurso = idCurso;
    
      let json = JSON.stringify(a);
      console.log(json);
      return  this.httpClient.post(`${this.API_URL}/estudiante/inscripcionCurso`,json, httpOptions);
  }
//Obtengo los roles y demas datos del usuario que se logueó
getUsuario(cedula){
  return this.httpClient.get(`${this.API_URL}/admin/usuario/`+cedula)
}

}

