import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Componente1Component } from './principal/componente1/componente1.component';
import { VistaComponent } from './principal/vista/vista.component';

const routes: Routes = [
  {path: 'componente1', component: Componente1Component},
  {path: 'componente1/:datos/:id/vista', component: VistaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
