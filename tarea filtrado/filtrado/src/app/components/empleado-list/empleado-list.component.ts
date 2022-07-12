import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/models/Empleado';

@Component({
  selector: 'app-empleado-list',
  templateUrl: './empleado-list.component.html',
  styleUrls: ['./empleado-list.component.css']
})
export class EmpleadoListComponent implements OnInit {
  listEmpleados: Empleado[]=[{
    legajo: 1, nombre: 'Juan', apellido:'Perez',sexo: 'Masculino', salario: 25000
  },{
    legajo: 2, nombre: 'Carlos', apellido:'Gomez',sexo: 'Masculino', salario: 29000
  },{
    legajo: 3, nombre: 'tuvieja', apellido:'en tanga',sexo: 'Masculino', salario: 29000
  },{
    legajo: 4, nombre: 'tu padre', apellido:'carlos',sexo: 'Femenino', salario: 29000
  },{
    legajo: 5, nombre: 'Carlos', apellido:'Gomez',sexo: 'Masculino', salario: 29000
  },{
    legajo: 6, nombre: 'Carlos', apellido:'Gomez',sexo: 'Masculino', salario: 29000
  },{
    legajo: 7, nombre: 'Carlos', apellido:'Gomez',sexo: 'Masculino', salario: 29000
  }]
  constructor() { }

  ngOnInit(): void {
  }

  radioButtonSeleccionado ="Todos";

  obtenerTotalEmpleados(): number{
    return this.listEmpleados.length;
  }

  obtenerTotalFemeninos(): number{
    return this.listEmpleados.filter(list => list.sexo === 'Femenino').length;
  }

  obtenerTotalMasculinos(): number{
    return this.listEmpleados.filter(list => list.sexo === 'Masculino').length;
  }
}
