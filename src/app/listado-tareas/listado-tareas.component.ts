import { Component, OnInit } from '@angular/core';

import { TareaService } from '../task-service/app-task-service.service';

@Component({
  selector: 'app-listado-tareas',
  templateUrl: './listado-tareas.component.html',
  styleUrl: './listado-tareas.component.css'
})
export class ListadoTareasComponent implements OnInit {
  
  tareas: any[] = [];
  
  constructor(private tareaService: TareaService) { }
  
  ngOnInit() {
    this.tareaService.obtenerTareas().subscribe(data => {
      console.log('Datos recibidos:', data); // Verifica los datos recibidos
      this.tareas = data;
      if (this.tareas.length === 0) {
        alert('No se encontraron tareas.');
      } else {
        console.log('Número de tareas encontradas:', this.tareas.length); // Verifica el número de tareas
      }
    }, error => {
      console.error('Error al obtener tareas', error);
    });
  }
}