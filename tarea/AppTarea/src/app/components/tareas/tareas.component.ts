import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/models/Tarea'

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {
  listTareas: Tarea[] = []
  nombreTarea = '';

  constructor() { }

  ngOnInit(): void {

  }
  
  agregarTarea(){


    //CREAR UN OBJETO TAREA
    const tarea: Tarea = {
    nombre: this.nombreTarea,
    estado: false
  }
  
    //AGREGAR EL OBJETO TAREA AL ARRAY
    this.listTareas.push(tarea);

    //RESET FORMULARIO
    this.nombreTarea= '';
  }
  eliminarTarea(index: number){
    this.listTareas.splice(index,1);
  }

  actualizarTarea(tarea: Tarea, index: number): void{
    this.listTareas[index].estado = !tarea.estado;
  }
}
