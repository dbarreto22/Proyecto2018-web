import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgbPaginationConfig } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { usuario } from '../modelos/usuario.model';
import { StorageService } from '../storage.service';
import { Rol } from '../modelos/rol.model';


@Component({
  selector: 'app-asociar-rol',
  templateUrl: './asociar-rol.component.html',
  styleUrls: ['./asociar-rol.component.css'],
  providers: [ApiService, NgbPaginationConfig, StorageService],
})
export class AsociarRolComponent implements OnInit {
  public cedula;
  public usuario = new usuario();
  public usuariosConRol = new Array<usuario>();
  public rolSelected;
  public show = false;

  constructor(public http: HttpClient, private apiService: ApiService, private router: Router) { }

  ngOnInit() {
    let rolElegido = localStorage.getItem('rolElegido');
    if (rolElegido != '1') {
      alert('El rol actual no puede acceder a esta función.');
      this.router.navigate(['/'])
    }
    this.cedula = localStorage.getItem('cedulaABM');
    console.log(this.cedula);
    this.getUsuario();
    this.usuario;
    this.getAllRolUsuario();
    this.getRolUsuario();

  }


  getUsuario() {
    console.log(this.cedula);
    this.apiService.getUsuario(this.cedula).subscribe((data: usuario) => {
      this.usuario = data;
      console.log(this.usuario);
    }, err => {
      this.apiService.mensajeConError(err);
    });
  }

  getAllRolUsuario() {
    this.apiService.getUserRol().subscribe((data: Array<usuario>) => {
      this.usuariosConRol = data;
      console.log(this.usuariosConRol);
    }, err => {
      this.apiService.mensajeConError(err);
    });
  }

  public rolUsuario: Array<Rol>;

  getRolUsuario() {

    this.usuariosConRol.forEach(element => {
      if (element.cedula == this.usuario.cedula) {
        this.usuario.roles = element.roles;
      }
      this.rolUsuario = this.usuario.roles;
      console.log(this.rolUsuario);
    });
  }

  public cantidad: number;


  setShow() {

    this.cantidad = 0;
    console.log(this.rolUsuario);

    if (this.rolUsuario.length = 0) {
      this.show = true;
    }

  }

  public ChangeRol(value: string) {
    this.rolSelected = value;
  }

  cancelar() {
    this.router.navigate(['/setingsUser']);
  }

  asociarRol() {

    this.apiService.asignarRol(this.cedula, this.rolSelected).subscribe(
      data => {
        this.apiService.mensajeSinError(data,2);
      }, err => {
        this.apiService.mensajeConError(err);
      });
      this.router.navigate(['/setingsUser']);

  }
}
