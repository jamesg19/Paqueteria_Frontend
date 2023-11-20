import { Envio } from "./envio";
import { EnvioAtrasado } from "./envio-atrasado";
import { HistorialVehiculo } from "./historial-vehiculo";
import { HistoricoSucursal } from "./historico-sucursal";

export class Simulacion {
    envios:Envio[];
    historicoSucursal:HistoricoSucursal[];
    historicoVehiculo:HistorialVehiculo[];
    envioAtrasado:EnvioAtrasado[];

}
