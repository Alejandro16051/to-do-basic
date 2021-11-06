import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tarea } from './tarea';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  private url: string = "http://localhost:8080/api/"

  constructor(private http: HttpClient) { }

  getAll(): Observable<Tarea[]> {
    return this.http.get<Tarea[]>(this.url + 'getTareas');
  }

  create(tarea: Tarea): Observable<Tarea> {
    return this.http.post<Tarea>(this.url + 'saveTareas/', tarea);
  }

  get(id: number): Observable<Tarea> {
    return this.http.get<Tarea>(this.url + 'getTareasById/' + id);
  }

  edit(tarea: Tarea): Observable<Tarea> {
    return this.http.put<Tarea>(this.url + 'saveTareas/', tarea);
  }

  delete(id: number): Observable<Tarea> {
    return this.http.delete<Tarea>(this.url + 'deleteTareas/' + id);
  }

}
