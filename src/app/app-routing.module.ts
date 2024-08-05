import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { AltaTareaComponent } from './alta-tarea/alta-tarea.component';
import { ListadoTareasComponent } from './listado-tareas/listado-tareas.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'alta-tarea', component: AltaTareaComponent },
  { path: 'listado-tareas', component: ListadoTareasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
