import {AbstractControl, FormControl, ValidationErrors, ValidatorFn} from "@angular/forms";
import {PersonaService} from "../Servicios/persona.service";

export const usuarioValidator:ValidatorFn = (group:AbstractControl): ValidationErrors | null =>{
  console.log("Validando en usuarioValidador");
  const ships = group.get('ships') as FormControl;
  const nitEmisor = ships.get('nit_emisor') as FormControl;
  const nitReceptor = ships.get('nit_receptor') as FormControl;
  return nitEmisor.value === nitReceptor.value?{userValidator:true}:null;
}

export const sucursalValidator:ValidatorFn = (group:AbstractControl): ValidationErrors | null =>{
  const ships = group.get('ships') as FormControl;
  const idSucursalOrigen = ships.get('sucursal_origen_id') as FormControl;
  const idSucursalDestino = ships.get('sucursal_destino_id') as FormControl;
  return idSucursalOrigen.value === idSucursalDestino.value?{sucursalValidator:true}:null;
}
