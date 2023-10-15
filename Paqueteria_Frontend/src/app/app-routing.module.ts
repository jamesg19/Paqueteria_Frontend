import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearEnvioComponent } from './Components/crear-envio/crear-envio.component';
import { MapComponent } from './Components/map/map.component';
import { AgregarVehiculosComponent } from './Components/agregar-vehiculos/agregar-vehiculos.component';
import { AgregarPersonalComponent } from './Components/agregar-personal/agregar-personal.component';
import { AgregarSucursalComponent } from './Components/agregar-sucursal/agregar-sucursal.component';
import { EditScucursalComponent } from './Components/edit-scucursal/edit-scucursal.component';

const routes: Routes = [
  {path: 'create_ship', component: CrearEnvioComponent},
  {path: 'agregar-vehiculo', component: AgregarVehiculosComponent},
  {path: 'agregar-personal', component: AgregarPersonalComponent},
  {path: 'agregar-sucursal', component: AgregarSucursalComponent},
  {path: 'editar-sucursal', component: EditScucursalComponent},
  //editar-sucursal
  
  {path: 'maps', component: MapComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
