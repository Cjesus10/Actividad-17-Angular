import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vista',
  templateUrl: './vista.component.html',
  styleUrls: ['./vista.component.css']
})
export class VistaComponent {

  constructor(private rutaActiva:ActivatedRoute){}

  numero = "";
  datos_recibidos = "";
  datos_json = new Array();

  ngOnInit(){
    this.numero = this.rutaActiva.snapshot.params['id']
    this.datos_recibidos = this.rutaActiva.snapshot.params['datos']
    this.datos_json = JSON.parse(this.datos_recibidos);
  }


}
