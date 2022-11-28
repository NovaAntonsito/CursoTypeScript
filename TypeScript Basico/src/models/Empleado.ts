import { Persona , Generos } from './Persona'

export class Empleado extends Persona {
  sueldo: number
  puesto: string
  horarioLaboral: string

  constructor(nombre: string,apellido: string,DNI: number,fechaNacimiento: Date,genero: Generos,sueldo: number,puesto: string,horarioLaboral: string,) {
    super(nombre, apellido, DNI, fechaNacimiento, genero)
    this.sueldo = sueldo
    this.puesto = puesto
    this.horarioLaboral = horarioLaboral
  }
}
