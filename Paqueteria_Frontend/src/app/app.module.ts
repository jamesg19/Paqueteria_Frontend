import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrearEnvioComponent } from './Components/envios/crear-envio/crear-envio.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MapComponent } from './Components/map/map.component';
import { AgregarPersonalComponent } from './Components/agregar-personal/agregar-personal.component';
import { AgregarSucursalComponent } from './Components/Sucursal/agregar-sucursal/agregar-sucursal.component';
import { HttpClientModule } from '@angular/common/http';
import { EditScucursalComponent } from './Components/Sucursal/edit-scucursal/edit-scucursal.component';
import { AgregarRutaComponent } from './Components/Rutas/agregar-ruta/agregar-ruta.component';
import { EditarRutaComponent } from './Components/Rutas/editar-ruta/editar-ruta.component';
import { MapaCoordenadaComponent } from './Components/mapa-coordenada/mapa-coordenada.component';
import { UsuarioModalComponent } from './UsuarioModal/usuarioModal.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { EditarPersonaComponent } from './Components/persona/editar-persona/editar-persona.component';
import { EditarEnvioComponent } from './Components/envios/editar-envio/editar-envio.component';
import {MatTooltipModule} from "@angular/material/tooltip";
import { DetalleComponent } from './Components/envios/detalle/detalle.component';
import { AnalisisComponent } from './Components/analisis/analisis.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AnalisisRutaComponent } from './Components/analisis/analisis-ruta/analisis-ruta.component';
import { AnalisisSucursalComponent } from './Components/analisis/analisis-sucursal/analisis-sucursal.component';
import { AnalisisVehiculosComponent } from './Components/analisis/analisis-vehiculos/analisis-vehiculos.component';
import { AgregarVehiculoComponent } from './Components/Vehiculos/agregar-vehiculo/agregar-vehiculo.component';
import { EditarVehiculoComponent } from './Components/Vehiculos/editar-vehiculo/editar-vehiculo.component';
import { DashboardComponent } from './Components/reportes/dashboard/dashboard.component';
import { ExcedenteComponent } from './Components/reportes/excedente/excedente.component';
import { MovSucursalComponent } from './Components/reportes/mov-sucursal/mov-sucursal.component';
import { MovVehiculoComponent } from './Components/reportes/mov-vehiculo/mov-vehiculo.component';
import { LoginComponent } from './Components/login/login.component';
import { SimulacionComponent } from './Components/simulacion/simulacion.component';
import { VariablesComponent } from './Components/variables/variables.component';


@NgModule({
  declarations: [
    AppComponent,
    CrearEnvioComponent,
    NavbarComponent,
    MapComponent,
    AgregarPersonalComponent,
    AgregarSucursalComponent,
    EditScucursalComponent,
    AgregarRutaComponent,
    EditarRutaComponent,
    MapaCoordenadaComponent,
    UsuarioModalComponent,
    EditarPersonaComponent,
    EditarEnvioComponent,
    DetalleComponent,
    AnalisisComponent,
    AnalisisRutaComponent,
    AnalisisSucursalComponent,
    AnalisisVehiculosComponent,
    AgregarVehiculoComponent,
    EditarVehiculoComponent,
    DashboardComponent,
    ExcedenteComponent,
    MovSucursalComponent,
    MovVehiculoComponent,
    LoginComponent,
    SimulacionComponent,
    VariablesComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        MatDialogModule,
        MatTooltipModule,
        FormsModule,
        NgxChartsModule,
        BrowserAnimationsModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
