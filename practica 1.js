/* 1 - Crea tres variables para asignar el nombre, apellido y edad del personaje 
principal de una película o serie que te guste */

let firtName; 
let lastName;
let age;

/* 2 - Imprime en pantalla el nombre y el tipo de cada variable anterior */

firstName = "Dory";
lastName = "Desconocido";
age = 2;
console.log("Nombre: " + firstName + ", tipo: " + typeof firstName);
console.log("Apellido: " + lastName + ", tipo: " + typeof lastName);
console.log("Edad: " + age + ", tipo: " + typeof age);

/* 3 - Crea una variable llamada city y asigna 5 lugares que aparezcan en la película o seríe. 
Después de cada asignación imprime el contenido de la variable. */

let city;
city = "Cleveland";
console.log(city);
city = "California";
console.log(city);
city = "Sídney";
console.log(city);
city = "Corriente Australiana Oriental (CAO)";
console.log(city);
city = "P. Sherman Calle Wallaby 42 Sídney";
console.log(city);

/* 4 - Completa las predicciones! hay un listado con tipos de datos,
primero escribe en la predicción qué dato crees que es y luego 
ejecuta el comando paraverificar si tu respuesta es correcta.*/

typeof(20);
// Predicción: number
console.log(typeof(20));

typeof(95.5);
// Predicción: number
console.log(typeof(95.5));

typeof(NaN);
// Predicción: number
console.log(typeof(NaN));

typeof("hello");
// Predicción: string
console.log(typeof("hello"));

typeof(true);
// Predicción: boolean
console.log(typeof(true));

typeof(1 != 2);
// Predicción: number
console.log(typeof(1 != 2));

typeof("1" - "3");
// Predicción: string
console.log(typeof("1" - "3"));

typeof("hamburguer" + "s");
// Predicción: string
console.log(typeof("hamburguer" + "s"));

typeof("1" + "3");
// Predicción: string
console.log(typeof("1" + "3"));

typeof("johnny" + 5);
// Predicción: string
console.log(typeof("johnny" + 5));

typeof("johnny" - 5);
// Predicción: string
console.log(typeof("johnny" - 5));

typeof(99 * "luftbaloons");
// Predicción: string
console.log(typeof(99 * "luftbaloons"));

typeof("hamburguers" - "s");
// Predicción: string
console.log(typeof("hamburguers" - "s"));

/* 5 - Convierte a mayusculas la frase ‘al que madruga Dios lo ayuda’ */

console.log("al que madruga Dios lo ayuda".toUpperCase());

/* 6 - Convierte a minusculas la frase “MAS VALE PAJARO EN MANO QUE CIENTOS VOLANDO” */

console.log("MAS VALE PAJARO EN MANO QUE CIENTOS VOLANDO".toLowerCase());

/* 7 - Se tiene las variables 
a.const saludo = ‘HoLa’;
b.const saludo2 = ‘mUnDo’;
Concatena las variables y realiza las transformaciones necesarias 
para Imprimir en pantalla ‘hola MUNDO */

const saludo = "HoLa";
const saludo2 = "mUnDo";
console.log(saludo.toLowerCase() + " " + saludo2.toUpperCase());

/* 8 - La cajera de un supermercado necesita implementar
un algoritmo que le imprima en pantalla el precio con descuento
de un producto. Si el precio del producto es 100 y el porcentaje
de descuento es 20%, el precio del producto con descuento es 80.
El programa debe imprimir en pantalla:
Su producto tiene un precio de 80, el descuento fue del 20%. */


function precio (total){
    total = total-(total*0.20);
    let mensaje = "Su producto tiene un precio de " + total + ", el descuento fue del 20%."
    console.log(mensaje);
    return mensaje
}

/* 9 - Obtener el valor de un promedio de cinco números.
Una vez obtenido el valor, imprimir el resultado en pantalla. */

function promedio (numeros){
    count = 0;
    for (let i = 0; i < numeros.length; i++) {
    count = count + numeros[i];
    }
    let prom = count / numeros.length;
    console.log(prom);
}

/* 10 - Crear una variable con el valor del diámetro de un círculo.
Apartir de ese valor, calcular su perímetro. 
Por último, imprimir en pantalla el resultado.
nota: La fórmula del perímetro se deba cargar en una constante. */

let diametro;
const perimetro = (diametro) => {
    resultado = Math.PI * diametro;
    console.log(resultado);
}