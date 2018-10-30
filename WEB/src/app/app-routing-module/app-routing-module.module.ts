import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GridComponent } from '../grid/grid.component';
import { TablaComponent } from '../tabla/tabla.component';
import { CursosComponent } from '../cursos/cursos.component';
import { InscCarreraComponent } from '../insc-carrera/insc-carrera.component';
import {LoginComponent} from '../login/login.component';
import {AuthorizatedGuard} from "../authorizated.guard";
import { GrafoComponent } from '../grafo/grafo/grafo.component';


const routes: Routes = [
  {path: 'login',component:LoginComponent},                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
  {path: 'cursos',component:CursosComponent, canActivate: [ AuthorizatedGuard ]},
  {path: 'grid', component:GridComponent, canActivate: [ AuthorizatedGuard ]},
  {path: 'tabla', component:TablaComponent, canActivate: [ AuthorizatedGuard ]},
  {path: 'inscCarrera', component:InscCarreraComponent, canActivate: [ AuthorizatedGuard ]},
  {path: 'grafo', component: GrafoComponent, canActivate: [ AuthorizatedGuard ]},
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '**', redirectTo: '/'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModuleModule {
  
 }
