import { Empleado } from "../Empleado";

export interface iTarea{
    titulo : string;
    descripcion? : string;
    personaACargo : Empleado;
    fechaEntrega : Date;
    fechaInicio : Date;
    resumen : () => string;
    completado : boolean;
}