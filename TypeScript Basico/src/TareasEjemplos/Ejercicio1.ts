interface Reproductor {
    segundos : number,
    volumen : number ,
    cancion : string,
    detalles : Detalles;
}

interface Detalles {
    autor : string,
    año : number 
}

const reproductor : Reproductor = {
    segundos : 23,
    volumen : 23,
    cancion : "Keep it Real Dumb",
    detalles: {
        autor : "Death From Above 1919",
        año: 2020
    }
}



const {volumen,cancion,segundos,detalles} = reproductor;
const {autor} = detalles

const myMap = new Map <string , string> ([
    ["Brazuca", "Macacos"],
    ["Chile", "Mundian't"]
])

interface Productos{
    name : string
    price : number
}


const tableta : Productos = {
        name : "Airpods",
        price : 300
}

const celular : Productos = {
    name : "Alcatel",
    price: 200
}

function calculaISV (producto : Productos[]) : number {
    let total = 0;

    producto.forEach(({price})=>{
        total += price
        console.log("Precio a sumar ",price);
        
    })
    
    console.log(total);
    
    return (total * 0.15)
}

const productosList: Productos[] = [celular,tableta]

/**
 * Obtener un numero x random entre 1 y 3
 */
let x: number = Math.floor(Math.random()*(3 - 1) * 1)
/**
 * Obtener un numero y rantom entre 1 y 3 
 */
let y: number = Math.floor(Math.random()*(3 - 1) * 1)

