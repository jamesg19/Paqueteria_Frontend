import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearEnvioComponent } from './Components/crear-envio/crear-envio.component';

const routes: Routes = [
  {path: 'create_ship', component: CrearEnvioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
