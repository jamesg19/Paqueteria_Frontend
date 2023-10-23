import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DepartamentoService } from 'src/app/Servicios/departamento.service';
import { SucursalService } from 'src/app/Servicios/sucursal.service';
import { Departamento } from 'src/app/entidades/departamento';
import { Municipio } from 'src/app/entidades/municipio';
import { Sucursal } from 'src/app/entidades/sucursal';

@Component({
  selector: 'app-agregar-sucursal',
  templateUrl: './agregar-sucursal.component.html',
  styleUrls: ['./agregar-sucursal.component.css']
})
export class AgregarSucursalComponent {
  sucursalForm: FormGroup;
  flag:number=0;
  departamentos:Departamento[];
  municipios:Municipio[];

  constructor(private formBuilder: FormBuilder,
    private departamentoService:DepartamentoService,
    private sucursalService:SucursalService){
    this.createForm();
    this.getDepartamentos();
  }

  private createForm(){
    console.log("crear el form")
    this.sucursalForm = this.formBuilder.group({
      sucursal: this.formBuilder.group({

            nombre:  new FormControl('', [Validators.required, Validators.minLength(1)]),
            direccion:  new FormControl('', [Validators.required, Validators.minLength(1)]),
            municipio_id:  new FormControl('', [Validators.required, Validators.minLength(1)]),
            departamento_id:  new FormControl('', [Validators.required, Validators.minLength(1)]),
            esEnlace:  new FormControl(false, [Validators.required, Validators.minLength(1)]),
            estado:  new FormControl(true, [Validators.required, Validators.minLength(1)]),



      })
    });


  }
  private setDepartamentoId(departamentoId: number) {
    this.sucursalForm.get('sucursal.departamento_id').setValue(departamentoId);
  }
  getMunicipiosByDeptoId(event:any){

    this.departamentoService.getMunicipiosDeptoId(event.target.value).subscribe(
      data=>{
        this.municipios=data;



      },error=>{
       alert("Error al obtener los departamentos")
      }
    );

  }

  getMunicipiosByDeptoIdFist(id:number){

    this.departamentoService.getMunicipiosDeptoId(id).subscribe(
      data=>{
        this.municipios=data;



      },error=>{
       alert("Error al obtener los departamentos")
      }
    );

  }


  getDepartamentos(){
    this.departamentoService.getDepartamentos().subscribe(
      data=>{
        this.departamentos=data;
        this.getMunicipiosByDeptoIdFist(this.departamentos[0].id)
        this.setDepartamentoId(this.departamentos[0].id);

      },error=>{
       alert("Error al obtener los departamentos")
      }
    );
  }


  onSubmit(){
    let sucursal:Sucursal=new Sucursal();
    sucursal.esEnlace=this.getEnlace();
    sucursal.estado=this.getEstado();
    sucursal.direccion=this.getDireccion();
    sucursal.nombre=this.getNombre();
    sucursal.municipio_id=+this.getMunicipioId();
    sucursal.departamento_id=+this.getDepartamentoId();
    console.log(sucursal);
    this.sucursalService.saveSucursal(sucursal).subscribe(
      data=>{
        this.flag=2;//ningun error al enviar 200 Status
        /*if(data.status==200){
          this.flag=2;//ningun error al enviar 200 Status
        }else{
          this.flag=1;//ningun error al enviar 200 Status
        }*/


      },error=>{
        this.flag=1;
       //alert("Error al guardar sucursal")
      }
    );


  }

  //GETTER SETTER
   getDepartamentoId() {
    return this.sucursalForm.get('sucursal.departamento_id').value;
  }

  getMunicipioId() {
    alert( this.sucursalForm.get('sucursal.municipio_id').value);
    return this.sucursalForm.get('sucursal.municipio_id').value;
  }

  getNombre() {
    return this.sucursalForm.get('sucursal.nombre').value;
  }

  getDireccion() {
    return this.sucursalForm.get('sucursal.direccion').value;
  }
  getEnlace() {
    return this.sucursalForm.get('sucursal.esEnlace').value;
  }
  getEstado() {
    return this.sucursalForm.get('sucursal.estado').value;
  }
}
