import { Empleado } from "./Empleado";
import { iTarea } from "./interfaces/tarea.interface";

export class Programar implements iTarea{
    titulo: string;
    descripcion?: string | undefined;
    personaACargo: Empleado;
    fechaEntrega: Date;
    fechaInicio: Date;
    completado: boolean;


    constructor(titulo : string, descripcion : 
        string, personaACargo : Empleado, fechaEntrega : Date, fechaInicio : Date, completado : boolean){
            this.titulo = titulo;
            this.descripcion = descripcion;
            this.personaACargo = personaACargo;
            this.fechaEntrega = fechaEntrega;
            this.fechaInicio = fechaInicio;
            this.completado = completado;
        }
    resumen = () : string => {
        return `La tarea a completar es ${this.titulo}`
    }
} 

