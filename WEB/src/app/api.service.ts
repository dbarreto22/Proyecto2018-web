import { Injectable } from '@angular/core';
import { HttpClient} from  '@angular/common/http';
import {Curso} from './cursos/Curso';
import { Observable } from 'rxjs';
import {Http, Response, Headers} from '@angular/http';



@Injectable()
export class ApiService {
  API_URL  =  'http://tsi-diego.eastus.cloudapp.azure.com:8080/miudelar-server';

constructor(private  httpClient:  HttpClient) { }

getAllCarrera(){
    return  this.httpClient.get(`${this.API_URL}/director/carrera`);
}

createCarrera(carrera){
  this.httpClient.post(`${this.API_URL}/crearCarrera/`,carrera);
}


getAsignaturaByCarrera(idCarrera){
  return this.httpClient.post(`${this.API_URL}/getAsignaturaByCarreras/`,idCarrera);
}

inscripcionCarrera(idUsuario,idCurso){
  //this.httpClient.post(`${this.API_URL}/crearCarrera/`,carrera);
}
}

