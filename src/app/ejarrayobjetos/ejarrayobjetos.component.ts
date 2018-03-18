import { Component, OnInit } from '@angular/core';
import { Alumno } from '../modelos/alumno.model';

@Component({
  selector: 'app-ejarrayobjetos',
  templateUrl: './ejarrayobjetos.component.html',
  styleUrls: ['./ejarrayobjetos.component.css']
})
export class EjarrayobjetosComponent implements OnInit {

  public alumnos: Array<Alumno> = [
    {id: 1, nombre: 'Roberto', apellidos: 'Costa', ciudad: 'Santa Cruz de Tenerife'},
    {id: 2, nombre: 'Juan', apellidos: 'Pérez', ciudad: 'Las Palmas de GC'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
