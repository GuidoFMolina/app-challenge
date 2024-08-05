import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
import { InicioComponent } from './inicio/inicio.component';
import { AltaTareaComponent } from './alta-tarea/alta-tarea.component';
import { ListadoTareasComponent } from './listado-tareas/listado-tareas.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    AltaTareaComponent,
    ListadoTareasComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
