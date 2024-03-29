/* 1 - Crear una variable con un array vacío y agregar dinámicamente 5 valores diferentes. */

let myArray = [];
let cont = 0
for (let i = 0; i < 5; i++) { 
    myArray.push(cont);
    cont += 1;
} 
console.log(myArray);

/* 2 - Qué longitud tiene el array
const myAlphabet = ['A', 'B', 'C', 'D','E','F', 'G']; */

const myAlphabet = ['A', 'B', 'C', 'D','E','F', 'G'];
console.log("Este array tiene " + myAlphabet.length + " elementos");

/* 3 - Imprime uno por uno cada valor del siguiente array
const fruits = [‘pera’, ‘manzana’, ‘durazno’, ‘banana’] */

const fruits = ["pera", "manzana", "durazno", "banana"];
for (let i = 0; i < fruits.length; i++) { 
    console.log(fruits[i])
}

/* 4 - Sumale 2 a cada elemento del siguiente array:
const numbers = [1, 3, 5, 7, 9] */

const numbers = [1, 3, 5, 7, 9]
for (let i = 0; i < numbers.length; i++) {
    numbers[i] += 2;
}
console.log(numbers);

/* 5 - Haz un algoritmo que cuente el número de veces que aparece
la letra r en la frase
“Erre con erre cigarro erre con erre barril rápido ruedan los 
carros cargados de azúcar del ferrocarril”. Imprime el resultado en pantalla */

let array = "Erre con erre cigarro erre con erre barril rápido ruedan los carros cargados de azúcar del ferrocarril".split([]);
let count = 0;
for (let i = 0; i < array.length; i++){
    if (array[i] == "r") {
        count += 1;
    }
}
console.log("la frase posee " + count + " letras r en total");

/* 6 - Con el siguiente array realiza las operaciones que se presentan a continuación:
let people = ["Ana", "Carolina", "Laura", "Natalia", “Fernanda”];*/
/* a) Usando un for loop itera el array e imprime el nombre de cada persona.*/

let people = ["Ana", "Carolina", "Laura", "Natalia", "Fernanda"];
for (let i = 0; i < people.length; i++) { 
    console.log(people[i])
}

/* b) Escribe el comando para eliminar a Carolina del array. 
Imprime en pantalla la variable people.*/
people.splice(1, 1);
console.log(people);

/* c) Escribe el comando para eliminar a Fernanda. 
Imprime en pantalla la variable people. */

people.pop();
console.log(people);

/* d) Escribe el comando para agregar a Francisco al array. 
Imprime enpantalla la variable people.*/

people.push("Francisco");
console.log(people);

/* e) Escribe el comando para agregar tu nombre al final del array. 
Imprime enpantalla la variable people. */

people.push("Lorena");
console.log(people);

/* f) Escribe el comando para retornar el indice de Natalia (indexOf) e imprimelo 
en pantalla. */

console.log(people.indexOf("Natalia"));


/* g)Hay 2 formas para acceder al indice de tu nombre (que es el último valor del array), 
describe cuáles son. */

//Forma 1: 
people.indexOf("Lorena");

//Forma 2:
people.length - 1;

/* 7 - Piensa en 3 canciones que te gusten, ahora crea un objeto con los 
valores de tu canción. Guárdalas en las variables song1. song2 y song3. 
Cada una debe contener las propiedades nombre, artista, año y album. */

const song1 = {
    name : "Flowers",
    artist : "Miley Cyrus",
    year : 2023,
    album : "Endless Summer Vacation",
}
const song2 = {
    name : "Mon Amour",
    artist : "Aitana, Zzoilo",
    year : 2022,
    album : "Alegría TikkTokk",
}
const song3 = {
    name : "Memories",
    artist : "Maroon 5",
    year : 2021,
    album : "Jordi",
}

/* 8 - Declarar un clase Tienda que permita registrar:
Nombre de la tienda.
Dirección de la tienda.
Propietario de la tienda.
Rubro de la tienda.
Luego invocar al menos tres (3) objetos usando esta clase */

class Tienda {
    constructor (name, address, owner, item) {
      this.name = name;
      this.address = address;
      this.owner = owner;
      this.item = item;
    }
}

const store1 = new Tienda("Taty", "Roma 1212", "Jose Perez", "Verduleria");
const store2 = new Tienda("Burbujas", "Santa Fe 3422", "Lucía Gomez", "Lavanderia");
const store3 = new Tienda("Vaca negra", "Buenos Aires 1200", "Maria Lopez", "Carnicería");

/* 9 - Instanciar 5 tiendas usando la clase Tienda que se creó en el punto anterior */

//No entiendo la diferencia con las 3 tiendas que cree antes :P


/* 10 - Dado el objeto:
const lion = {
    species: "Panthera leo";
    foots: 4;
    hasTail: true;
    weight: "190kg";
    isMammal: true;
};
Obtener e imprimir por separado e valor de 3 propiedades usando notación de punto y 
de corchetes. */

const lion = {
    species: "Panthera leo",
    foots: 4,
    hasTail: true,
    weight: "190kg",
    isMammal: true,
};
console.log(lion.species);
console.log(lion.foots);
console.log(lion.hasTail);
console.log(lion["species"]);
console.log(lion["weight"]);
console.log(lion["isMammal"]);


