import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearEnvioComponent } from './Components/envios/crear-envio/crear-envio.component';
import { MapComponent } from './Components/map/map.component';
import { AgregarVehiculosComponent } from './Components/agregar-vehiculos/agregar-vehiculos.component';
import { AgregarPersonalComponent } from './Components/agregar-personal/agregar-personal.component';
import { AgregarSucursalComponent } from './Components/Sucursal/agregar-sucursal/agregar-sucursal.component';
import { EditScucursalComponent } from './Components/Sucursal/edit-scucursal/edit-scucursal.component';
import { EditarRutaComponent } from './Components/Rutas/editar-ruta/editar-ruta.component';
import {EditarEnvioComponent} from "./Components/envios/editar-envio/editar-envio.component";
import {UsuarioModalComponent} from "./UsuarioModal/usuarioModal.component";
import {EditarPersonaComponent} from "./Components/persona/editar-persona/editar-persona.component";

const routes: Routes = [
  {path: 'create_ship', component: CrearEnvioComponent},
  {path: 'editar-envio', component: EditarEnvioComponent},
  {path: 'agregar-vehiculo', component: AgregarVehiculosComponent},
  {path: 'agregar-personal', component: AgregarPersonalComponent},
  {path: 'agregar-sucursal', component: AgregarSucursalComponent},
  {path: 'editar-sucursal', component: EditScucursalComponent},
  {path: 'editar-ruta', component: EditarRutaComponent},
  {path: 'agregar-persona', component: UsuarioModalComponent},
  {path: 'editar-persona', component: EditarPersonaComponent},
  //editar-sucursal

  {path: 'maps', component: MapComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
