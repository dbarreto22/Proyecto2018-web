import { Component, OnInit, Directive } from '@angular/core';
import { ApiService } from '../api.service';
import { NgbPaginationConfig } from '@ng-bootstrap/ng-bootstrap';
import { StorageService } from '../storage.service';
import { CompositeFilterDescriptor, State } from '@progress/kendo-data-query';
import { SelectableSettings, GridDataResult, RowArgs, PageChangeEvent } from '@progress/kendo-angular-grid';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { carrera } from '../modelos/carrera.model';


@Component({
    selector: 'app-insc-carrera',
    templateUrl: './insc-carrera.component.html',
    styleUrls: ['./insc-carrera.component.css'],
    providers: [ApiService, NgbPaginationConfig, StorageService],
})
export class InscCarreraComponent implements OnInit {

    public codigo;
    public carrera;
    public cedula;
    public loading;
    public carreras: Observable<Array<Object>>;
    public checked = false;
    public filter: CompositeFilterDescriptor;
    selectedValue: any[];
    public checkboxOnly = true;
    public selectableSettings: SelectableSettings;
    public skip = 0;


    constructor(public http: HttpClient, private apiService: ApiService,
         private router: Router, private route: ActivatedRoute) {
        this.setSelectableSettings();
        this.loading = true;
        this.carreras = this.apiService.getAllCarrera();
        
        this.carreras.subscribe(
            () => this.loading = false,
            ee => {
                apiService.mensajeConError(ee);
                this.loading = false
            }
        )
    }

    ngOnInit() {
        let rolElegido = localStorage.getItem('rolElegido');
        if (rolElegido != '4') {
            alert('El rol actual no puede acceder a esta función.');
            this.router.navigate(['/'])
        }
    }

    public setSelectableSettings(): void {
        this.selectableSettings = {
            checkboxOnly: this.checkboxOnly,
            mode: "single",
        };
    }

    public state: State = {
        skip: 0,
        take: 5
      }
    
      public mySelection: string[] = [];
      public mySelectionKey(context: RowArgs): string {
        return context.dataItem.codigo;
      }
    
      public pageChange(event: PageChangeEvent): void {
        console.log(this.mySelection[0]);
        this.skip = event.skip;
    
      }
    
      change() {
    
        this.carreras.subscribe(
          (data: Array<carrera>) => {
            data.forEach(asig => {
              if (asig.codigo == this.mySelection[0]) {
                this.carrera = asig;
                this.codigo = this.carrera.codigo;
                console.log(this.codigo);
    
              }
            })
    
          },
          err => {
            this.apiService.mensajeConError(err);
          }
        )
      }

    cancelar() {
        this.router.navigate(['/']);
    }
    

    public inscCarrerra() {
        if (this.codigo != undefined) {
            this.cedula = JSON.parse(localStorage.getItem('session')).usr.cedula;
            console.log(JSON.parse(localStorage.getItem('session')).usr.cedula);
            this.apiService.inscripcionCarrera(this.cedula, this.codigo).subscribe(
                data => {
                    this.apiService.mensajeSinError(data,3);
                    this.router.navigate(['/']);
                },
                err => {
                    this.apiService.mensajeConError(err);
                    this.router.navigate(['/inscCarrera']);
                });
        }
        else
            alert('Debe seleccionar una carrera para continuar.');
    }


}