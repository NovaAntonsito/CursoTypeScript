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






