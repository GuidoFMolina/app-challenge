import { Component } from '@angular/core';
import { TareaService } from '../task-service/app-task-service.service';

@Component({
  selector: 'app-alta-tarea',
  templateUrl: './alta-tarea.component.html',
  styleUrl: './alta-tarea.component.css'
})
export class AltaTareaComponent {
  tarea = {
    nombre: '',
    descripcion: '',
    fechaInicio: ''
  };

  constructor(private tareaService: TareaService) { }

  crearTarea() {
    if (this.tarea.fechaInicio) {
      const dateParts = this.tarea.fechaInicio.split('-');
      if (dateParts.length === 3) {
        const [day, month, year] = dateParts;

        if (!isNaN(+day) && !isNaN(+month) && !isNaN(+year)) {
          const fechaConvertida = `${year}-${month}-${day}`;

         
         console.log(fechaConvertida);

          this.tareaService.crearTarea(this.tarea).subscribe(response => {
            alert('Tarea creada con éxito');
            this.tarea = { nombre: '', descripcion: '', fechaInicio: '' }; // Resetear el formulario
          }, error => {
            console.error('Error al crear tarea', error);
          });
        } else {
          console.error('Fecha de inicio no válida: contiene valores no numéricos', this.tarea.fechaInicio);
        }
      } else {
        console.error('Fecha de inicio no válida: formato incorrecto', this.tarea.fechaInicio);
      }
    } else {
      console.error('Fecha de inicio no proporcionada.');
    }
  }
}



