import { setCookie } from "cookies-utils"
import { listaCursos } from "./mock/Cursos.mock"
import { Curso } from "./models/Cursos"
import { Estudiante } from "./models/Estudiante"

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

//Funciones Arrow

/**
 * Muestra el sueldo y usa otra funcion en caso de necesite cambiar el sueldo
 * @param e 
 */
const mostrarSueldo = (e : Puestos)=>{
     if(!(e.sueldo < 2000)){
      cambiarSueldo(e)
     }else{
      console.log(`${e.nombre} cobra ${e.sueldo}`);
     }
}

const cambiarSueldo = (e:Puestos) =>{
  console.log(`${e.nombre} se le cambio el sueldo a 3000`);
  return e.sueldo = 3000
}

mostrarSueldo(aplicacion)

console.log(aplicacion);


//Funciones Async
/**Contienen metodos Await, Generators, yield */

async function asyncEjemplo() :Promise<string> {
    await console.log("Tarea a completar");
    console.log("Termine con las tareas");
    return "Completado"
}
asyncEjemplo()
.then((result : string) => {
      console.log(`Respuesta ${result}`);
})
.catch((err : string) => {
  console.log(`${err} Error!`);
  
})
.finally(()=>"Todo terminado")

function* generatorEjemplo() {
  // yield ==> para emitir valores
  let index = 0;
  while(index < 5){
    yield index++
  }
}

let generator = generatorEjemplo()


console.log(generator.next().value);


//Sobrecarga de objetos

function mostrarError(error : string | number) : void{
  console.log("Error ", error);
}


//Persistencia de datos
/**  
 * 1:Local Storage
 * 2:Session Storage
 * 3:Cookies
*/

const newEstudiante : Estudiante = new Estudiante ("Marcos","3992399", listaCursos,232132323,"Anton")

console.log(`El estudiante ${newEstudiante.nombre} ${newEstudiante.apellidos}, legajo ${newEstudiante.legajo}`);

console.log(newEstudiante.horasTotales);




