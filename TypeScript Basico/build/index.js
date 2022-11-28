"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Cursos_mock_1 = require("./mock/Cursos.mock");
const Estudiante_1 = require("./models/Estudiante");
const Genero_enum_1 = require("./models/Genero.enum");
const Persona_1 = require("./models/Persona");
//Declaracion de variables
let nombre = 'Marcos';
let edad = 23;
let email = 'antonbarroso16@gmail.com';
let empleado = false;
let comodin = 'Soy lo que sea'; //Cambia a todo tipo de variable :Any
//Console.log
console.log('Hola ' + nombre + ' tienes ' + edad + ' y tu email es: ' + email);
console.log(empleado ? 'Esta empleado' : 'No esta empleado');
//Array de cada tipo
let nombres = ['Marcos', 'Fernando'];
let numerosRand = [1, 32, 232];
//Array random
let valoresVarios = [true, 'Hola', 23, false];
//Enums
var Tareas;
(function (Tareas) {
    Tareas["Completada"] = "Completada";
    Tareas["En proceso"] = "En proceso";
    Tareas["Demorado"] = "Demorado";
    Tareas["No empezado"] = "No empezado";
})(Tareas || (Tareas = {}));
let estadoTarea = Tareas.Completada;
console.log(estadoTarea);
// ** Aplicar datos a la interface
let aplicacion = {
    nombre: 'Tecnico en software',
    sueldo: 2900,
    tareas: Tareas.Completada,
    tiempo: 9,
    ocupado: true,
};
console.log('Esto es una interface');
console.log(aplicacion);
console.log('----------------------------------------------------');
let productoVisto = {
    nombre: 'Leche la serenisima',
    fechaDeVencimiento: '20/20/2031',
    precio: 200,
    disponible: true,
};
console.log('Esto es un type');
console.log(productoVisto);
//Lista de Productos:Type
let listaDeCompra = [
    {
        nombre: 'Leche la serenisima',
        fechaDeVencimiento: '20/20/2031',
        precio: 200,
        disponible: true,
    },
    {
        nombre: 'Yogur el malisioso',
        fechaDeVencimiento: '22/10/2010',
        precio: 10000,
        disponible: true,
    },
    {
        nombre: 'Queso el original',
        fechaDeVencimiento: '20/12/2300',
        precio: 2003,
        disponible: false,
    },
];
//Lista de puestos:Inteface
let empleados = [
    {
        nombre: 'Tecnico en software',
        sueldo: 2900,
        tareas: Tareas.Completada,
        tiempo: 9,
        ocupado: true,
    },
    {
        nombre: 'Tester',
        sueldo: 3000,
        tareas: Tareas.Demorado,
        tiempo: 9,
        ocupado: true,
    },
    {
        nombre: 'Q&A Asistente',
        sueldo: 2900,
        tareas: Tareas['En proceso'],
        tiempo: 9,
        ocupado: true,
    },
];
console.log();
//For clasico
for (let i = 0; i < empleados.length; i++) {
    const empleadoArray = empleados[i];
    console.log(`${i + 1} - ${empleadoArray.nombre}`);
}
console.log();
console.log('---------------------------------------');
console.log();
//ForEach
empleados.forEach((puestos, index) => {
    console.log(`${index + 1} - ${puestos.tareas}`);
});
//Funciones
/**
 *  Dependiendo del input devuelve Buenas! o Adios!
 */
function doAThing(a) {
    if (a === 'Buenas') {
        return 'Buenas!';
    }
    else {
        return 'Adios!';
    }
}
console.log("Funcion nueva: " + doAThing("asd"));
/**
* Saluda a alguien
*/
function saludarAlguien(nombre) {
    console.log(`Hola ${nombre}, como andas`);
}
/**
 * Hace una suma random
 */
function sumarRandom() {
    let a = Math.random(), b = Math.random();
    console.log("Suma random! " + a + b);
}
saludarAlguien(nombre);
sumarRandom();
//Funciones Arrow
/**
 * Muestra el sueldo y usa otra funcion en caso de necesite cambiar el sueldo
 * @param e
 */
const mostrarSueldo = (e) => {
    if (!(e.sueldo < 2000)) {
        cambiarSueldo(e);
    }
    else {
        console.log(`${e.nombre} cobra ${e.sueldo}`);
    }
};
const cambiarSueldo = (e) => {
    console.log(`${e.nombre} se le cambio el sueldo a 3000`);
    return e.sueldo = 3000;
};
mostrarSueldo(aplicacion);
console.log(aplicacion);
//Funciones Async
/**Contienen metodos Await, Generators, yield */
function asyncEjemplo() {
    return __awaiter(this, void 0, void 0, function* () {
        yield console.log("Tarea a completar");
        console.log("Termine con las tareas");
        return "Completado";
    });
}
asyncEjemplo()
    .then((result) => {
    console.log(`Respuesta ${result}`);
})
    .catch((err) => {
    console.log(`${err} Error!`);
})
    .finally(() => "Todo terminado");
function* generatorEjemplo() {
    // yield ==> para emitir valores
    let index = 0;
    while (index < 5) {
        yield index++;
    }
}
let generator = generatorEjemplo();
console.log(generator.next().value);
//Sobrecarga de objetos
function mostrarError(error) {
    console.log("Error ", error);
}
//Persistencia de datos
/**
 * 1:Local Storage
 * 2:Session Storage
 * 3:Cookies
*/
const newEstudiante = new Estudiante_1.Estudiante("Marcos", "3992399", Cursos_mock_1.listaCursos, 232132323, "Anton");
console.log(`El estudiante ${newEstudiante.nombre} ${newEstudiante.apellidos}, legajo ${newEstudiante.legajo}`);
console.log(newEstudiante.horasTotales);
let fechaActual = new Date(2022, 11, 27);
const newPersona = new Persona_1.Persona("Marcos", "Anton", 42209583, new Date(2022, 11, 27), Genero_enum_1.Generos.Masculino);
console.log(newPersona);
newPersona.saludar();
