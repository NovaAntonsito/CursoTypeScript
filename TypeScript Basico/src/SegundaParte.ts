interface Persona{
    name : string,
    age : number,
    email : string,
    employed : boolean
}
const persona1 : Persona = {
    name: "Marcos",
    age: 23,
    email: "asdsada",
    employed: true
}

const names : string[] = ["Marcos", "Laika", "Kay", "Kenny"]


function iterarPorCadaNombre(...n: string[]){
 n.forEach((n : string, i : number)=>{
    console.log(`${n} y esta en la posicion ${i}`);
    
 }
 )
}
iterarPorCadaNombre(...names)


 