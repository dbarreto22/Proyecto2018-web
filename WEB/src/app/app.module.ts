import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatCardModule, MatMenuModule, MatTableModule, MatPaginatorModule, MatSortModule} from '@angular/material';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar-Alumno/toolbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { GridComponent } from './grid/grid.component';
import { TablaComponent } from './tabla/tabla.component';
import { CursosComponent } from './cursos/cursos.component';
import {RouterModule} from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';
import { AppRoutingModuleModule } from './app-routing-module/app-routing-module.module';

import { ToolbarAdministradorComponent } from './toolbar-administrador/toolbar-administrador.component';
import { ToolbarDirectorComponent } from './toolbar-director/toolbar-director.component';
import { InscCarreraComponent } from './insc-carrera/insc-carrera.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HttpClientModule } from '@angular/common/http'; 


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    GridComponent,
    TablaComponent,
    CursosComponent,
    ToolbarAdministradorComponent,
    ToolbarDirectorComponent,
    InscCarreraComponent
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule, 
    LayoutModule, MatToolbarModule, 
    MatSidenavModule, MatIconModule, 
    MatListModule, MatGridListModule, 
    MatCardModule, MatMenuModule, 
    MatTableModule, MatPaginatorModule, 
    HttpClientModule,
    MatSortModule,AgGridModule.withComponents([]),
    AppRoutingModuleModule, MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
export class PizzaPartyAppModule { }
