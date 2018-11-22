import { Component, OnInit} from '@angular/core';
import { ApiService } from '../api.service';
import { NgbPaginationConfig } from '@ng-bootstrap/ng-bootstrap';
import { StorageService } from '../storage.service';
import { CompositeFilterDescriptor} from '@progress/kendo-data-query';
import { SelectableSettings} from '@progress/kendo-angular-grid';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { carrera } from '../modelos/carrera.model';

@Component({
  selector: 'app-ingr-carreras',
  templateUrl: './ingr-carreras.component.html',
  styleUrls: ['./ingr-carreras.component.css'],
  providers: [ApiService,NgbPaginationConfig, StorageService],
})
export class IngrCarrerasComponent implements  OnInit {

  public codigoCarrera;
  public nombreCarrera;
  public checked = false;
  public filter: CompositeFilterDescriptor;
  selectedValue: any[];
  public checkboxOnly = true;
  public selectableSettings: SelectableSettings;
  public mySelection: any[];


  constructor(public http: HttpClient ,config: NgbPaginationConfig, private  apiService:  ApiService,
      private storageService: StorageService, private router: Router) {

          
      }
     
  ngOnInit() {
    let rolElegido=localStorage.getItem('rolElegido');
    if( rolElegido!='3')
    {
      alert('El rol actual no puede acceder a esta función.');
      this.router.navigate(['/'])
    }
    }    


  getCodigoIngresado(value:string){
  
    this.codigoCarrera = value;
   
    }
  
  
  getNombreIngresado(value:string){
    
    this.nombreCarrera = value;
    }
  
  cancelar(){
    this.router.navigate(['/setingsCarrera']);
    }

    public DtCarrera = new carrera();
    insgCarrerra(){

      console.log(this.codigoCarrera);
      console.log(this.nombreCarrera);

      this.DtCarrera.codigo = this.codigoCarrera;
      this.DtCarrera.nombre = this.nombreCarrera;

      console.log(this.DtCarrera);
      this.apiService.ingresarCarrera(this.DtCarrera).subscribe(
        data=>{
          console.log(data);
          if (data == 'OK')
              alert("Se creo carrera correctamente ");
          else
            alert('Ha sucedido un error al procesar su solicitud, vuelva a intentarlo mas tarde.');
            this.router.navigate(['/setingsCarrera']);
          },err=>{console.log(err.status + ' ' + err.message);
          if (err.status == 403) {
            alert('Su sesión ha expirado.');
            this.router.navigate(['login']);
          }
          else {
            alert('Ha sucedido un error al procesar su solicitud, vuelva a intentarlo mas tarde ' + err);
          }
          this.router.navigate(['/setingsCarrera']);
      });
    }

}
