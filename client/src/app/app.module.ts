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
import { SalaListComponent } from './components/sala-list/sala-list.component'

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
    SalaListComponent
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
