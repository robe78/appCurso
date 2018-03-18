import { Component} from '@angular/core';

@Component ({
  selector: 'app-fechaactual',
  template: `
  <h4>Pipe Date - Lowercase - Uppercase</h4>
  <p> {{ ciudad | lowercase }}, {{hoy | date: 'd-M-y'}} a las {{ hoy | date: 'HH:mm z'}}</p>
  <p> {{ ciudad | uppercase }}, {{hoy | date: 'd-M-y'}} a las {{ hoy | date: 'HH:mm z'}}</p>
  <hr>
  <h4>Pipe Decimal</h4>
  <p>El resultado es {{ resultado | number: '3.2-2'}}</p>
  <hr>
  <h4>Pipe Currency</h4>
  <p>La cotización actual de dólar es de {{ dolareuro | currency: 'EUR': true}}</p>
  <hr>
  <h4>Pipe i18nSelect</h4>
  <p>{{ sexo1 | i18nSelect: encabezamiento }} {{nombre1}}</p>
  <p>{{ sexo2 | i18nSelect: encabezamiento }} {{nombre2}}</p>
  <hr>
  <h4>Pipe Propio</h4>
  <p>La cotización actual de dólar es de {{ dolareuro2 | euro}}</p>
  <hr>
  `,
  styleUrls: ['./fechaactual.component.css']
})

export class FechaactualComponent {
  hoy = new Date ();
  ciudad = 'Santa Cruz de Tenerife';
  resultado = 1.2;
  dolareuro = 0.88;
  nombre1 = 'Laura';
  nombre2 = 'Roberto';
  sexo1 = 'mujer';
  sexo2 = 'hombre';
  encabezamiento: any = {'hombre': 'Estimado', 'mujer': 'Estimada'};
  dolareuro2 = 0.88;
}
