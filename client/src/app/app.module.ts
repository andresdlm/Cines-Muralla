import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PeliculaFormComponent } from './components/pelicula-form/pelicula-form.component';
import { PeliculaListComponent } from './components/pelicula-list/pelicula-list.component';
import { TaquillaComponent } from './components/taquilla/taquilla.component';
import { ConfiteriaComponent } from './components/confiteria/confiteria.component';
import { InicioComponent } from './components/inicio/inicio.component';

import { PeliculasService } from './services/peliculas.service';
import { SedeListComponent } from './components/sede-list/sede-list.component';
import { SalaListComponent } from './components/sala-list/sala-list.component';
import { ComidaListComponent } from './components/comida-list/comida-list.component';
import { ComboListComponent } from './components/combo-list/combo-list.component';
import { FuncionListComponent } from './components/funcion-list/funcion-list.component';
import { DatosPeliculaListComponent } from './components/datos-pelicula-list/datos-pelicula-list.component'

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PeliculaFormComponent,
    PeliculaListComponent,
    TaquillaComponent,
    ConfiteriaComponent,
    InicioComponent,
    SedeListComponent,
    SalaListComponent,
    ComidaListComponent,
    ComboListComponent,
    FuncionListComponent,
    DatosPeliculaListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    PeliculasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
