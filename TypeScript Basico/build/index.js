"use strict";
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
console.log('Esto es una interfase');
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
        ocupado: true
    },
    {
        nombre: 'Tester',
        sueldo: 3000,
        tareas: Tareas.Demorado,
        tiempo: 9,
        ocupado: true
    },
    {
        nombre: 'Q&A Asistente',
        sueldo: 2900,
        tareas: Tareas["En proceso"],
        tiempo: 9,
        ocupado: true
    }
];
empleados.forEach((puestos, index) => {
    console.log(`${index + 1} - ${puestos.tareas}`);
});
