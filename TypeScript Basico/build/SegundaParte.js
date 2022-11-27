"use strict";
const persona1 = {
    name: "Marcos",
    age: 23,
    email: "asdsada",
    employed: true
};
const names = ["Marcos", "Laika", "Kay", "Kenny"];
function iterarPorCadaNombre(...n) {
    n.forEach((n, i) => {
        console.log(`${n} y esta en la posicion ${i}`);
    });
}
iterarPorCadaNombre(...names);
