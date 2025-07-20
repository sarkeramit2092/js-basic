// number

let balance = 120

let amount = new Number(100)  //not recommended

console.log(typeof balance);
console.log(typeof amount);
// everything is an object

//null and undefined

let firstname = null;  

/* Null means it is there, but the value is null means it's empty. It's neither a number, it's neither a string, it's neither zero, it's neither empty string, it just is null. Null is null.
Empty is empty.
*/

let lastname;

console.log(typeof(firstname))
console.log(typeof(lastname))


let myString = "hello";
let myStringOne = "Hola";
let username = "hitesh";

let oldGreet = myString + " " + "hitesh";
console.log(oldGreet);

let greetMessage = `Hello ${username} !`;
console.log(greetMessage);


// symbol

//The symbol - it guarantees the uniqueness.

let sm1 = Symbol()
let sm2 = Symbol()

console.log(sm1 == sm2)

let sm3 = Symbol("amit")
let sm4 = Symbol("amit")

console.log(sm3 == sm4)
