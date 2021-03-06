import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatToolbarModule, MatSidenavModule,
   MatIconModule, MatListModule, MatGridListModule, MatCardModule, MatMenuModule,
    MatTableModule, MatPaginatorModule, MatSortModule,MatInputModule} from '@angular/material';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar-Alumno/toolbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { GridComponent } from './grid/grid.component';
import { TablaComponent } from './tabla/tabla.component';
import { CursosComponent } from './cursos/cursos.component';
import {RouterModule} from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';
import { AppRoutingModuleModule } from './app-routing-module/app-routing-module.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ToolbarAdministradorComponent } from './toolbar-administrador/toolbar-administrador.component';
import { ToolbarDirectorComponent } from './toolbar-director/toolbar-director.component';
import { InscCarreraComponent } from './insc-carrera/insc-carrera.component';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http'; 
import {ApiService} from '../app/api.service';
import { LoginComponent } from './login/login.component';
import { AuthenticationService } from './authentication.service';
import { StorageService } from './storage.service';
import {AuthorizatedGuard} from './authorizated.guard';
import {NgxPaginationModule} from 'ngx-pagination';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { JwtModule } from '@auth0/angular-jwt';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { D3Service, D3_DIRECTIVES } from './d3';
import { GraphComponent } from './visuals/graph/graph.component';
import { SHARED_VISUALS } from './visuals/shared';
import { GrafoComponent } from './grafo/grafo/grafo.component';
import { StorageServiceModule } from 'angular-webstorage-service';
import { GridModule } from '@progress/kendo-angular-grid';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { InscExamenComponent } from './insc-examen/insc-examen.component';
import { CalificacionesComponent } from './calificaciones/calificaciones.component';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { IngrCarrerasComponent } from './ingr-carreras/ingr-carreras.component';
import { LabelModule } from '@progress/kendo-angular-label';
import { IngrAsignaturaComponent } from './ingr-asignatura/ingr-asignatura.component';
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { abmAsignaturaComponent } from './abmasignatura/abmasignatura.component';
import { AsignarAsigCarreraComponent } from './asignar-asig-carrera/asignar-asig-carrera.component';
import { ABMUsuarioComponent } from './abmusuario/abmusuario.component';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { ModificarUsuarioComponent } from './modificar-usuario/modificar-usuario.component';
import { AsociarRolComponent } from './asociar-rol/asociar-rol.component';
import { ABMCarreraComponent } from './abmcarrera/abmcarrera.component';
import { ModificarCarreraComponent } from './modificar-carrera/modificar-carrera.component';
import { ModificarAsignaturaComponent } from './modificar-asignatura/modificar-asignatura.component';
import { CalificacionesCursoComponent } from './calificaciones-curso/calificaciones-curso.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FlexLayoutModule } from "@angular/flex-layout";
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { LoginLayoutComponent } from './login/loginLayout';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ErrorComponent } from './error.component';
import { ListarUsuariosComponent } from './listar-usuarios/listar-usuarios.component';
import { ToolbarHomeComponent } from './toolbar-home/toolbar-home.component';
import { NgxLoadingModule } from 'ngx-loading';
import { ListarCarrerasComponent } from './listar-carreras/listar-carreras.component';
import { ListarCursosCarrerasComponent } from './listar-cursos-carreras/listar-cursos-carreras.component';
import {MatSelectModule} from '@angular/material/select';
import {CrearPreviasComponent} from './crearPrevias/crearPrevias.component';
import { CursosPreviasComponent } from './CursosPrevias/cursosPrevias.component';
import { NovedadesComponent } from './layouts/home-layout/novedades.component';
import { CrearAsigMadreComponent } from './crear-asig-madre/crear-asig-madre.component';

export function tokenGetter() {
  return localStorage.getItem('access_token');
}

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    GridComponent,
    TablaComponent,
    CursosComponent,
    ToolbarAdministradorComponent,
    ToolbarDirectorComponent,
    InscCarreraComponent,
    LoginComponent,
    AppComponent,
    ...SHARED_VISUALS,
    ...D3_DIRECTIVES,
    GraphComponent,
    GrafoComponent,
    InscExamenComponent,
    CalificacionesComponent,
    IngrCarrerasComponent,
    IngrAsignaturaComponent,
    CrearUsuarioComponent,
    abmAsignaturaComponent,
    AsignarAsigCarreraComponent,
    ABMUsuarioComponent,
    ModificarUsuarioComponent, 
    AsociarRolComponent,
    ABMCarreraComponent,
    ModificarCarreraComponent,
    ModificarAsignaturaComponent,
    CalificacionesCursoComponent,
    LoginLayoutComponent,
    HomeLayoutComponent,
    HomeComponentComponent,
    ErrorComponent,
    ListarUsuariosComponent,
    ToolbarHomeComponent,
    ListarCarrerasComponent,
    ListarCursosCarrerasComponent,
    CrearPreviasComponent,
    CursosPreviasComponent,
    NovedadesComponent,
    CrearAsigMadreComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, GridModule ,FormsModule,
    MatButtonModule, MatCheckboxModule, 
    LayoutModule, MatToolbarModule, 
    MatSidenavModule, MatIconModule, 
    MatListModule, MatGridListModule, 
    MatCardModule, MatMenuModule, 
    MatTableModule, MatPaginatorModule, 
    HttpClientModule,MatInputModule,
    ReactiveFormsModule,
    MatSortModule,AgGridModule.withComponents([]),
    AppRoutingModuleModule,NgxPaginationModule,
    RouterModule,NgbModule,StorageServiceModule,
    RouterModule,NgbModule,InputsModule,FlexLayoutModule,
    JwtModule.forRoot({
      config: { 
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:4200'],
        blacklistedRoutes: ['localhost:4200/api/auth']
      }
    }),
    DropDownsModule,
    LabelModule,
    ButtonsModule,
    HttpClientJsonpModule,
    DialogsModule,
    NgxLoadingModule.forRoot({}),
    MatSelectModule,
    
    MDBBootstrapModule.forRoot()
  ],
  providers: [
    ApiService,AuthenticationService,
    StorageService,AuthorizatedGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiService,
      multi: true
    },
    D3Service
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class PizzaPartyAppModule { }
