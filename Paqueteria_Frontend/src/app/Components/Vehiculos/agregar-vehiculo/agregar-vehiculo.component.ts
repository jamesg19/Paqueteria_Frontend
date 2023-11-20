import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SucursalService } from 'src/app/Servicios/sucursal.service';
import { VehiculoServicioService } from 'src/app/Servicios/vehiculo-servicio.service';
import { Sucursal } from 'src/app/entidades/sucursal';
import { Vehiculo } from 'src/app/entidades/vehiculo';

@Component({
  selector: 'app-agregar-vehiculo',
  templateUrl: './agregar-vehiculo.component.html',
  styleUrls: ['./agregar-vehiculo.component.css']
})
export class AgregarVehiculoComponent {
  vehiculoForm: FormGroup;
  flag:number=0;
  sucursales:Sucursal[];
  vehiculos:Vehiculo[];


  constructor(private formBuilder: FormBuilder,
    private sucursalService:SucursalService,
    private vehiculoService:VehiculoServicioService){
    this.createForm();
    this.getSucursales();
  }

  private createForm(){
    console.log("crear el form")
    this.vehiculoForm = this.formBuilder.group({
      vehiculo: this.formBuilder.group({

            id:  new FormControl('', [Validators.required, Validators.minLength(1)]),
            marca:  new FormControl('', [Validators.required, Validators.minLength(1)]),
            tipo:  new FormControl('', [Validators.required, Validators.minLength(1)]),
            placa:  new FormControl('', [Validators.required, Validators.minLength(1)]),
            tonelage:  new FormControl('', [Validators.required, Validators.minLength(1)]),
            anio:  new FormControl('    ', [Validators.required, Validators.minLength(1)]),
            noAsientos:  new FormControl('', [Validators.required, Validators.minLength(2)]),
            capacidadVol:  new FormControl('', [Validators.required, Validators.minLength(1)]),
            capacidadTon:  new FormControl('', [Validators.required, Validators.minLength(1)]),
            sucursalId:  new FormControl('', [Validators.required, Validators.minLength(1)])


      })
    });


  }







  getSucursales(){

    this.sucursalService.getSucursalesActivas().subscribe(
      data=>{
        this.sucursales=data;



      },error=>{
       alert("Error al obtener las sucursales con vehiculos")
      }
    );

  }





  onSubmit(){
    let vehiculo:Vehiculo=new Vehiculo();
    vehiculo.marca=this.getMarca().toUpperCase();
    vehiculo.tipo=this.getTipo();
    vehiculo.placa=this.getPlaca().toUpperCase();
    vehiculo.tonelage=this.getTonelage();
    vehiculo.anio=this.getAnio();
    vehiculo.noAsientos=this.getNoAsientos();
    vehiculo.capacidadVol=this.getCapacidadVol();
    vehiculo.capacidadTon=this.getCapacidadTon();
    vehiculo.idSucursal=this.getSucursalId();



    console.log(vehiculo);
    this.vehiculoService.savevehiculo(vehiculo).subscribe(
      data=>{
        this.flag=2;

      },error=>{
        this.flag=1;
       //alert("Error al guardar sucursal")
      }
    );


  }




  getVehiculos(){
    this.vehiculoService.getVehiculosBySucursalId(14).subscribe(
      data=>{
        this.vehiculos=data;

      },
      error=>{
        alert("Error al obtener vehiculos")

      }
    )
  }

  // Método para obtener el valor de 'marca'
getMarca() {
  return this.vehiculoForm.get('vehiculo.marca').value;
}

// Método para obtener el valor de 'tipo'
getTipo() {
  return this.vehiculoForm.get('vehiculo.tipo').value;
}

// Método para obtener el valor de 'placa'
getPlaca() {
  return this.vehiculoForm.get('vehiculo.placa').value;
}

// Método para obtener el valor de 'tonelage'
getTonelage() {
  return this.vehiculoForm.get('vehiculo.tonelage').value;
}

// Método para obtener el valor de 'anio'
getAnio() {
  return this.vehiculoForm.get('vehiculo.anio').value;
}

// Método para obtener el valor de 'noAsientos'
getNoAsientos() {
  return this.vehiculoForm.get('vehiculo.noAsientos').value;
}

// Método para obtener el valor de 'capacidadVol'
getCapacidadVol() {
  return this.vehiculoForm.get('vehiculo.capacidadVol').value;
}

// Método para obtener el valor de 'capacidadTon'
getCapacidadTon() {
  return this.vehiculoForm.get('vehiculo.capacidadTon').value;
}
// Método para obtener el valor de 'sucursalId'
getSucursalId() {
  return this.vehiculoForm.get('vehiculo.sucursalId').value;
}
resetForm() {
  this.vehiculoForm.reset(); // Esto restablecerá los valores del formulario a su estado original
}

}
