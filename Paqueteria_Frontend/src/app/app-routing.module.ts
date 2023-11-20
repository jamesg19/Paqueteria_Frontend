import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearEnvioComponent } from './Components/envios/crear-envio/crear-envio.component';
import { MapComponent } from './Components/map/map.component';
import { AgregarPersonalComponent } from './Components/agregar-personal/agregar-personal.component';
import { AgregarSucursalComponent } from './Components/Sucursal/agregar-sucursal/agregar-sucursal.component';
import { EditScucursalComponent } from './Components/Sucursal/edit-scucursal/edit-scucursal.component';
import { EditarRutaComponent } from './Components/Rutas/editar-ruta/editar-ruta.component';
import { AgregarRutaComponent } from './Components/Rutas/agregar-ruta/agregar-ruta.component';
import { MapaCoordenadaComponent } from './Components/mapa-coordenada/mapa-coordenada.component';
import {EditarEnvioComponent} from "./Components/envios/editar-envio/editar-envio.component";
import {UsuarioModalComponent} from "./UsuarioModal/usuarioModal.component";
import {EditarPersonaComponent} from "./Components/persona/editar-persona/editar-persona.component";
import { AnalisisRutaComponent } from './Components/analisis/analisis-ruta/analisis-ruta.component';
import { AnalisisVehiculosComponent } from './Components/analisis/analisis-vehiculos/analisis-vehiculos.component';
import { AnalisisSucursalComponent } from './Components/analisis/analisis-sucursal/analisis-sucursal.component';
import { AgregarVehiculoComponent } from './Components/Vehiculos/agregar-vehiculo/agregar-vehiculo.component';
import { EditarVehiculoComponent } from './Components/Vehiculos/editar-vehiculo/editar-vehiculo.component';
import { DashboardComponent } from './Components/reportes/dashboard/dashboard.component';
import { ExcedenteComponent } from './Components/reportes/excedente/excedente.component';
import { MovSucursalComponent } from './Components/reportes/mov-sucursal/mov-sucursal.component';
import { MovVehiculoComponent } from './Components/reportes/mov-vehiculo/mov-vehiculo.component';
import { LoginComponent } from './Components/login/login.component';
import { SimulacionComponent } from './Components/simulacion/simulacion.component';

const routes: Routes = [
  {path: 'create_ship', component: CrearEnvioComponent},
  {path: 'editar-envio', component: EditarEnvioComponent},

  {path: 'agregar-personal', component: AgregarPersonalComponent},

  {path: 'agregar-sucursal', component: AgregarSucursalComponent},
  {path: 'editar-sucursal', component: EditScucursalComponent},

  {path: 'agregar-vehiculo', component: AgregarVehiculoComponent},
  {path: 'editar-vehiculo', component: EditarVehiculoComponent},

  {path: 'agregar-ruta', component: AgregarRutaComponent},
  {path: 'editar-ruta', component: EditarRutaComponent},
  {path: 'agregar-persona', component: UsuarioModalComponent},
  {path: 'editar-persona', component: EditarPersonaComponent},
  //editar-sucursal

  {path: 'maps', component: MapComponent},
  {path: 'maps_live', component: MapaCoordenadaComponent},

  //Analisis de datos
  {path: 'analisis-ruta', component: AnalisisRutaComponent},
  {path: 'analisis-vehiculos', component: AnalisisVehiculosComponent},
  {path: 'analisis-sucursal', component: AnalisisSucursalComponent},
  
  {path: 'dashboard', component: DashboardComponent},
  {path: 'excedente', component: ExcedenteComponent},
  {path: 'mov-sucursal', component: MovSucursalComponent},
  {path: 'mov-vehiculo', component: MovVehiculoComponent},
  {path: 'login', component: LoginComponent},
  {path: 'simulacion', component: SimulacionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
