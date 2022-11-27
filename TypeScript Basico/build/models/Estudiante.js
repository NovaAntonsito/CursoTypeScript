"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Estudiante = void 0;
class Estudiante {
    constructor(nombre, legajo, cursos, _DNI, apellidos) {
        this.nombre = nombre;
        this.legajo = legajo;
        this.cursos = cursos;
        this._DNI = _DNI;
        this.apellidos = apellidos ? apellidos : undefined;
    }
    /**
     * Sumar las horas total del estudiante
     */
    get horasTotales() {
        let horasTotalesEstudidadas = 0;
        this.cursos.forEach((cursos) => {
            horasTotalesEstudidadas += cursos.horas;
        });
        return horasTotalesEstudidadas;
    }
    get DNI() {
        return this._DNI;
    }
    set DNI(value) {
        this._DNI = value;
    }
}
exports.Estudiante = Estudiante;
