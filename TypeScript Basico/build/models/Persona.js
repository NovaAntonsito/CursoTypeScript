"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
class Persona {
    constructor(nombre, apellido, DNI, fechaNacimiento, generos) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.DNI = DNI;
        this.fechaNacimiento = fechaNacimiento;
        this.genero = generos;
    }
    saludar() {
        console.log(`Hola!, me llamo ${this.nombre}`);
    }
}
exports.Persona = Persona;
