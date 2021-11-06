import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Tarea } from './tarea';
import { TareaService } from './tarea.service';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.sass']
})
export class TareaComponent implements OnInit {

  tarea: Tarea[];

  tareaSave: Tarea = new Tarea();

  tareaUpdate: Tarea = new Tarea();


  constructor(private tareaService: TareaService) { }

  ngOnInit(): void {
    this.tareaService.getAll().subscribe(
      t => this.tarea = t
    );
  }

  create(): void {
    this.tareaService.create(this.tareaSave).subscribe(
      res => history.go(0)
    );
  }

  eliminar(tarea: Tarea): void {
    this.tareaService.delete(tarea.id).subscribe(
      res => this.tareaService.getAll().subscribe(
        response => this.tarea = response
        )
    );
  }

}
