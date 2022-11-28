"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Jefe = void 0;
const Persona_1 = require("./Persona");
class Jefe extends Persona_1.Persona {
    constructor(nombre, apellido, DNI, fechaNacimiento, generos, sueldo, empleados) {
        super(nombre, apellido, DNI, fechaNacimiento, generos);
        this.sueldo = sueldo;
        this.empleados = empleados;
    }
}
exports.Jefe = Jefe;
