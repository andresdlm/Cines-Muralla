import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaquillaComponent } from './components/taquilla/taquilla.component';
import { ConfiteriaComponent } from './components/confiteria/confiteria.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { PeliculaFormComponent } from './components/pelicula-form/pelicula-form.component';
import { SalaListComponent } from './components/sala-list/sala-list.component';


const routes: Routes = [
  { path: "", component: InicioComponent },
  { path: "taquilla", component: TaquillaComponent },
  { path: "confiteria", component: ConfiteriaComponent },
  { path: "peliculas/add", component: PeliculaFormComponent },
  { path: 'sede/:id', component: SalaListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
