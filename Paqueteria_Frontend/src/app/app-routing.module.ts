import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearEnvioComponent } from './Components/crear-envio/crear-envio.component';
import { MapComponent } from './Components/map/map.component';
import { AgregarVehiculosComponent } from './Components/agregar-vehiculos/agregar-vehiculos.component';
import { AgregarPersonalComponent } from './Components/agregar-personal/agregar-personal.component';
import { AgregarSucursalComponent } from './Components/Sucursal/agregar-sucursal/agregar-sucursal.component';
import { EditScucursalComponent } from './Components/Sucursal/edit-scucursal/edit-scucursal.component';
import { EditarRutaComponent } from './Components/Rutas/editar-ruta/editar-ruta.component';
import { AgregarRutaComponent } from './Components/Rutas/agregar-ruta/agregar-ruta.component';
import { MapaCoordenadaComponent } from './Components/mapa-coordenada/mapa-coordenada.component';

const routes: Routes = [
  {path: 'create_ship', component: CrearEnvioComponent},
  {path: 'agregar-vehiculo', component: AgregarVehiculosComponent},
  {path: 'agregar-personal', component: AgregarPersonalComponent},
  {path: 'agregar-sucursal', component: AgregarSucursalComponent},
  {path: 'editar-sucursal', component: EditScucursalComponent},

  {path: 'agregar-ruta', component: AgregarRutaComponent},
  {path: 'editar-ruta', component: EditarRutaComponent},
  //editar-sucursal
  
  {path: 'maps', component: MapComponent},
  {path: 'maps_live', component: MapaCoordenadaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
