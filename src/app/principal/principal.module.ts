import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Componente1Component } from './componente1/componente1.component';
import { VistaComponent } from './vista/vista.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    Componente1Component,
    VistaComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    Componente1Component,
    VistaComponent
  ]
})
export class PrincipalModule { }
