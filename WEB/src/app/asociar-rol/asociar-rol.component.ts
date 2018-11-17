import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgbPaginationConfig } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { usuario } from '../modelos/usuario.model';
import { StorageService } from '../storage.service';


@Component({
  selector: 'app-asociar-rol',
  templateUrl: './asociar-rol.component.html',
  styleUrls: ['./asociar-rol.component.css'],
  providers: [ApiService,NgbPaginationConfig, StorageService],
})
export class AsociarRolComponent implements OnInit {
  public cedula;
  public usuario = new usuario();
  public usuariosConRol = new Array<usuario>();
  public rolSelected;
  public rolMostrar = [{
    "id" : 1, 
    "tipo":"Administrador"
},
{ 
  "id" : 2, 
    "tipo":"Bedelia"
},
{
  "id" : 3, 
    "tipo":"Director"
},
{
  "id" : 4, 
"tipo":"Estudiante"}];

  public show = false;

  constructor(public http: HttpClient ,config: NgbPaginationConfig, private  apiService:  ApiService,
    private storageService: StorageService, private router: Router) { }

  ngOnInit() {
      this.cedula = localStorage.getItem('cedulaABM');
      console.log(this.cedula);
      this.getUsuario();
      this.usuario;
      this.getAllRolUsuario();
      this.getRolUsuario();
      this.setShow();
  }


  getUsuario(){
    console.log(this.cedula);
    this.apiService.getUsuario(this.cedula).subscribe((data: usuario)=> {
      this.usuario  =  data;
      console.log(this.usuario);
     });
  }

getAllRolUsuario(){
  this.apiService.getUserRol().subscribe((data: Array<usuario>)=> {
    this.usuariosConRol  =  data;
    console.log(this.usuario);
   });
}

public rolUsuario : Array<string>;
getRolUsuario(){

  this.usuariosConRol.forEach(element => {
      if(element.cedula == this.usuario.cedula){
        this.usuario.roles = element.roles;
      }
      this.rolUsuario =  this.usuario.roles;
      console.log(this.rolUsuario);
  });
}

setShow(){
  if(this.rolUsuario.length > 0){
    this.show = true;
  }
}
public ChangeRol(value:string) {
  this.rolSelected = value;
}

cancelar(){
  this.router.navigate(['/setingsUser']);
  }

asociarRol(){

  this.apiService.asignarRol(this.cedula,this.rolSelected).subscribe(
    data=>{this.router.navigate(['/setingsUser']);
    alert("Se asigno Correctamente el Rol");
    },err=>{
      alert("No se ha podido asignar Rol" + err.message+ err.status);
      this.router.navigate(['/setingsUser']);
  });

}


}
