import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejdirectivangswitch',
  templateUrl: './ejdirectivangswitch.component.html',
  styleUrls: ['./ejdirectivangswitch.component.css']
})
export class EjdirectivangswitchComponent implements OnInit {

  jugadores: any [] = [
    { nombre: 'Critiano Ronaldo' , equipo: 'Real Madrid'},
    { nombre: 'Lionel Messi' , equipo: 'FC Barcelona'},
    { nombre: 'Griezmann' , equipo: 'Atlético de Madrid'},
    { nombre: 'Karim Benzema' , equipo: 'Real Madrid'},
    { nombre: 'Luis suárez' , equipo: 'FC Barcelona'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
