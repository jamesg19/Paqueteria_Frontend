import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RutaService } from 'src/app/Servicios/ruta.service';
import { SucursalService } from 'src/app/Servicios/sucursal.service';
import { Ruta } from 'src/app/entidades/ruta';
import { Sucursal } from 'src/app/entidades/sucursal';

@Component({
  selector: 'app-agregar-ruta',
  templateUrl: './agregar-ruta.component.html',
  styleUrls: ['./agregar-ruta.component.css']
})
export class AgregarRutaComponent {
  rutasForm: FormGroup;
  resultado:string="";
  sucursales:Sucursal[];
  
  constructor(private formBuilder: FormBuilder, 
    private sucursalService:SucursalService,private rutaService:RutaService){
      this.getSucursales();
    this.createForm();
    

  }

  private getSucursales(){
    this.sucursalService.getSucursalesActivas().subscribe({
      next: data => {
        this.sucursales = data;
      },
      error: err => {
      }
    });
  }
  private createForm(){

    console.log("crear el form");
    
    this.rutasForm = this.formBuilder.group({
      ruta: this.formBuilder.group({

            sucursalOrigen:  new FormControl('', [Validators.required, Validators.minLength(1)]),            
            sucursalDestino:  new FormControl('', [Validators.required, Validators.minLength(1)]),       
            distancia:  new FormControl(0, [Validators.required, Validators.minLength(1)]),  
            dias:  new FormControl(1, [Validators.required, Validators.minLength(1)]),
            costo:  new FormControl(5, [Validators.required, Validators.minLength(1)]),
              
            
                             

      })
    });

    
  }

  onSubmit(){
    console.log("Entra")
    let ruta:Ruta= new Ruta();
    ruta.origen=this.rutasForm.get("ruta.sucursalOrigen").value;
    ruta.destino=this.rutasForm.get("ruta.sucursalDestino").value;
    ruta.dias=this.rutasForm.get("ruta.dias").value;
    ruta.distancia=this.rutasForm.get("ruta.distancia").value;
    ruta.costo=this.rutasForm.get("ruta.costo").value;
    
    this.rutaService.saveRutass(ruta).subscribe(
    {
      next: data => {
        alert("La ruta se agrego exitosamente")
      },  
      error: err => {
        alert("la ruta ya existe")
      }
    }
    )



  }

}
