import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { NgbPaginationConfig } from '@ng-bootstrap/ng-bootstrap';
import { StorageService } from '../storage.service';
import { SelectableSettings } from '@progress/kendo-angular-grid';
import { usuario } from '../modelos/usuario.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { State } from '@progress/kendo-data-query';

@Component({
  selector: 'app-listar-usuarios',
  template: `
  <div class="example-config">
    Listar Usuarios
  </div>
  
  <kendo-grid     
      [kendoGridBinding]="usuarios" 
      [pageSize]="10"
      [pageable]="true"
      [sortable]="true"
      [filterable]="true"
      [groupable]="true"
      [resizable]="true"
      [selectable]="selectableSettings" 
      (selectionChange) = "change($event)"
      [height]="500"
  >
  <kendo-grid-column field="cedula" title="Cedula" width="80" >
      </kendo-grid-column>
  <kendo-grid-column field="nombre" title="Nombre">
      </kendo-grid-column>
  <kendo-grid-column field="apellido" title="Apellido">
      </kendo-grid-column>
  <kendo-grid-checkbox-column ></kendo-grid-checkbox-column>
      </kendo-grid>

  <div class="example-wrapper">
      <kendo-dialog title="Confirmar" *ngIf="dialogOpened" (close)="close('dialog')" [minWidth]="200" [width]="350">
              <p style="margin: 30px; text-align: center;">Datos de usuario</p>
              <p style="margin: 30px; text-align: center;"></p>
              <p style="margin: 30px; text-align: center;">{{usuario.nombre}}</p>
              <p style="margin: 30px; text-align: center;">{{usuario.apellido}}</p>
              <p style="margin: 30px; text-align: center;">{{usuario.email}}</p>
              <kendo-dialog-actions>
                  
                  <button kendoButton (click)="action()" >Aceptar</button>  
              </kendo-dialog-actions>
  </kendo-dialog>



`,
  styleUrls: ['./listar-usuarios.component.css'],
  providers: [ApiService,NgbPaginationConfig, StorageService],
})
export class ListarUsuariosComponent implements OnInit {

  public checkboxOnly = true;
  public selectableSettings: SelectableSettings;
  public usuarios:  Array<usuario> = [];
  public cedulaSelect :string;
  public usuario = new usuario();
  public dialogOpened = false;
constructor(public http: HttpClient ,config: NgbPaginationConfig, private  apiService:  ApiService,
  private storageService: StorageService, private router: Router) {
      this.setSelectableSettings();
    
      
  }

  ngOnInit() {
    this.getusuarios();
    this.usuarios;
  }

  public setSelectableSettings(): void {
    this.selectableSettings = {
        checkboxOnly: this.checkboxOnly,
        mode: "single",
    };
}

  public state: State = {
    skip: 0,
    take: 5,
};


public  getusuarios(){
  this.apiService.getAllUser().subscribe((data:  Array<usuario>) => {
      this.usuarios  =  data;
      console.log(this.usuarios);
  });
}

change(e){
  this.usuario =   this.usuarios[e.index];
  this.cedulaSelect =  this.usuario.cedula;
  console.log(this.cedulaSelect);
   this.dialogOpened = true;
}


public MostrarUsuario(){
  localStorage.setItem('cedulaABM', this.cedulaSelect);
  this.router.navigate(['/modificarUsr']);
}

public action() {
  this.dialogOpened = false;
}

}