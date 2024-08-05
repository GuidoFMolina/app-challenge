import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TareaService {
  private apiUrlCrear = 'http://localhost:8080/task/crear-tarea';
  private apiUrlListar = 'http://localhost:8080/task/listar-tareas';

  constructor(private http: HttpClient) { }


  crearTarea(tarea: { nombre: string, descripcion: string, fechaInicio: string }): Observable<any> {
    return this.http.post<any>(this.apiUrlCrear, tarea);
  }

 
  obtenerTareas(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrlListar)
      .pipe(
        map((resp: any) => {
          const res: any[] = [];
          Object.keys(resp).forEach(key => {
            const tarea: any = resp[key];
            tarea.id = key;
            res.push(tarea);
          });
          return res;
        }),
        catchError(error => {
          console.error('Error al obtener tareas', error);
          return of([]); 
        })
      );
  }
}
