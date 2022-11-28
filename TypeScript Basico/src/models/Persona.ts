export enum Generos{
    Masculino = "Masculino",
    Femenino = "Femenino",
    NoBinario = "No Binario",
    Trans = "Transexual"
}
export class Persona{
    nombre : string;
    apellido : string;
    DNI : number;
    fechaNacimiento: Date;
    genero : Generos;

    constructor(nombre :string, apellido : string,DNI : number,fechaNacimiento : Date,generos : Generos) {
        this.nombre = nombre
        this.apellido = apellido
        this.DNI = DNI
        this.fechaNacimiento = fechaNacimiento
        this.genero = generos    
    }

    saludar() : void{
        console.log(`Hola!, me llamo ${this.nombre}`);
        
    }
}