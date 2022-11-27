import { Curso } from "./Cursos";
export class Estudiante {

    nombre : string;
    apellidos? :string;
    legajo : string;
    cursos : Curso[];
    private _DNI: number;
    
    constructor(nombre : string, legajo : string, cursos : Curso[],_DNI : number, apellidos? : string){
      this.nombre = nombre;
      this.legajo = legajo;
      this.cursos = cursos;
      this._DNI = _DNI
      this.apellidos = apellidos?apellidos: undefined
    }
    /**
     * Sumar las horas total del estudiante
     */
    get horasTotales() : number{
        let horasTotalesEstudidadas = 0;
        this.cursos.forEach((cursos: Curso)=>{
            horasTotalesEstudidadas += cursos.horas
        })
        return horasTotalesEstudidadas
    }
    public get DNI(): number {
        return this._DNI;
    }
    public set DNI(value: number) {
        this._DNI = value;
    }
  
}