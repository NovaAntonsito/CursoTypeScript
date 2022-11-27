//Declaracion de variables
let nombre: string = 'Marcos'
let edad: number = 23
let email: string = 'antonbarroso16@gmail.com'
let empleado: boolean = false
let comodin: any = 'Soy lo que sea' //Cambia a todo tipo de variable :Any

//Console.log

console.log('Hola ' + nombre + ' tienes ' + edad + ' y tu email es: ' + email)
console.log(empleado ? 'Esta empleado' : 'No esta empleado')

//Array de cada tipo

let nombres: string[] = ['Marcos', 'Fernando']
let numerosRand: number[] = [1, 32, 232]

//Array random

let valoresVarios: (string | number | boolean)[] = [true, 'Hola', 23, false]

//Enums

enum Tareas {
  'Completada' = 'Completada',
  'En proceso' = 'En proceso',
  'Demorado' = 'Demorado',
  'No empezado' = 'No empezado',
}

let estadoTarea: Tareas = Tareas.Completada

console.log(estadoTarea)

// ** Interface

interface Puestos {
  nombre: string
  sueldo: number
  tareas: Tareas
  tiempo: number
  ocupado: boolean
}

// ** Aplicar datos a la interface
let aplicacion: Puestos = {
  nombre: 'Tecnico en software',
  sueldo: 2900,
  tareas: Tareas.Completada,
  tiempo: 9,
  ocupado: true,
}

console.log('Esto es una interface')
console.log(aplicacion)
console.log('----------------------------------------------------')

// ** Types de typescript

type Producto = {
  nombre: string
  fechaDeVencimiento: string
  precio: number
  disponible: boolean
}

let productoVisto: Producto = {
  nombre: 'Leche la serenisima',
  fechaDeVencimiento: '20/20/2031',
  precio: 200,
  disponible: true,
}

console.log('Esto es un type')
console.log(productoVisto)

//Lista de Productos:Type
let listaDeCompra: Producto[] = [
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
]

//Lista de puestos:Inteface
let empleados: Puestos[] = [
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
]
console.log()

//For clasico
for (let i = 0; i < empleados.length; i++) {
  const empleadoArray = empleados[i]
  console.log(`${i + 1} - ${empleadoArray.nombre}`)
}
console.log()
console.log('---------------------------------------')
console.log()

//ForEach
empleados.forEach((puestos: Puestos, index: number) => {
  console.log(`${index + 1} - ${puestos.tareas}`)
})

//Funciones


/** 
 *  Dependiendo del input devuelve Buenas! o Adios! 
 */
function doAThing(a: string) {
  if (a === 'Buenas') {
    return 'Buenas!'
  } else {
    return 'Adios!'
  }
}

console.log("Funcion nueva: "+doAThing("asd"));

/** 
* Saluda a alguien 
*/
function saludarAlguien(nombre:string) {
  console.log(`Hola ${nombre}, como andas`);
}
/**
 * Hace una suma random
 */
function sumarRandom() {
  let a:number = Math.random(), b:number = Math.random()
  console.log("Suma random! "+ a+b);
} 
saludarAlguien(nombre);
sumarRandom();