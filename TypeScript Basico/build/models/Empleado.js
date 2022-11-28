"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Empleado = void 0;
const Persona_1 = require("./Persona");
class Empleado extends Persona_1.Persona {
    constructor(nombre, apellido, DNI, fechaNacimiento, genero, sueldo, puesto, horarioLaboral) {
        super(nombre, apellido, DNI, fechaNacimiento, genero);
        this.sueldo = sueldo;
        this.puesto = puesto;
        this.horarioLaboral = horarioLaboral;
    }
}
exports.Empleado = Empleado;
