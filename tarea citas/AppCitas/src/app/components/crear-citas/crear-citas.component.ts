import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-crear-citas',
  templateUrl: './crear-citas.component.html',
  styleUrls: ['./crear-citas.component.css']
})
export class CrearCitasComponent implements OnInit {
  nombre = '';
  fecha = '';
  hora = '';
  sintomas = '';

  formularioIncorrecto = false;
  @Output() nuevaCita = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  agregarCita(){
    if (this.nombre == '' || this.fecha == '' || this.sintomas == ''){
      this.formularioIncorrecto = true;
      return;
    }
    this.formularioIncorrecto = false;

  //CREAMOS OBJETO PARA ENVIARLO AL PADRE
  const CITA = {
    nombre: this.nombre,
    fecha: this.fecha,
    hora: this.hora,
    sintomas: this.sintomas
    }
    console.log(CITA);
    this.nuevaCita.emit(CITA);
    this.resetCampo();
  }
    resetCampo(){
      this.nombre = '';
      this.fecha = '';
      this.hora = '';
      this.sintomas = '';
    }
}
