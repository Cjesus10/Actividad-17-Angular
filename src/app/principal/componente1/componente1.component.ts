import { Component } from '@angular/core';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})
export class Componente1Component {
  
  dato = [
    {ID:1, Codigo:1, Descripcion: "Galletas chokis", Pcompra:10.00, Pventa: 15.00, Ganancia:5, Existencia:100.00},
    {ID:2, Codigo:2, Descripcion: "Mermelada de fresa", Pcompra:65.00, Pventa: 80.00, Ganancia:15, Existencia:100.00},
    {ID:3, Codigo:3, Descripcion: "Aceite", Pcompra:18.00, Pventa: 20.00, Ganancia:2, Existencia:100.00},
    {ID:4, Codigo:4, Descripcion: "Palomitas de maiz", Pcompra:12.00, Pventa: 15.00, Ganancia:3, Existencia:100.00},
    {ID:5, Codigo:5, Descripcion: "Doritos", Pcompra:5.00, Pventa: 8.00, Ganancia:3, Existencia:100.00},
  ]
}
