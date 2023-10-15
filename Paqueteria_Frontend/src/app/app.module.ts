import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrearEnvioComponent } from './Components/crear-envio/crear-envio.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MapComponent } from './Components/map/map.component';
import { AgregarVehiculosComponent } from './Components/agregar-vehiculos/agregar-vehiculos.component';
import { AgregarPersonalComponent } from './Components/agregar-personal/agregar-personal.component';
import { AgregarSucursalComponent } from './Components/agregar-sucursal/agregar-sucursal.component';
import { HttpClientModule } from '@angular/common/http';
import { EditScucursalComponent } from './Components/edit-scucursal/edit-scucursal.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearEnvioComponent,
    NavbarComponent,
    MapComponent,
    AgregarVehiculosComponent,
    AgregarPersonalComponent,
    AgregarSucursalComponent,
    EditScucursalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
