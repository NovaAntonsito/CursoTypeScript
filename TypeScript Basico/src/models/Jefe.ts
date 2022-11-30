import { Empleado } from "./Empleado";
import { Persona, Generos } from "./Persona";

export class Jefe extends Persona{
    sueldo : number;
    empleados : Empleado[];

    constructor(nombre :string, apellido : string,DNI : number,fechaNacimiento : Date,generos : Generos,sueldo : number, empleados : Empleado[]){
        super(nombre, apellido, DNI, fechaNacimiento, generos)
        this.sueldo = sueldo
        this.empleados = empleados
    }
}