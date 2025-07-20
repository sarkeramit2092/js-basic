let username = {
  firstname: "amit", 
  isLoggedin: true,       //compiler doesn't really bother about it.
};                        // whole considered as a one memory space.

console.log(typeof(username))


const username2 = {
  firstname: "amit", 
  isLoggedin: true,
};

/* It's constant. It's not going to change, but you can actually
change these values because they are primitive type.
So the whole idea behind constant and the variable is that
*/

// how do we even access each of these element?

console.log(username2.firstname)

username2.firstname = "Mr. A"

console.log(username2.firstname)

/* 
So you're not changing the memory references.

The memory reference is still the same.

So always see these variables as

*/


// add additional property, for example, last name.

username2.lastname = "Sarker"
console.log(username2.lastname)

console.log(username2)


// other way to access data

const username3 = {
  "first name": "Amita", 
  isLoggedin: true,
};


console.log(username3["first name"])


// another dataType Array -collection of things

let heros = ["superman", "ironman","batman", true, 202]

// array in array is also possible

console.log(heros[0])
console.log(heros[3])


// Type Conversion

console.log("1"+1)  //11


// avaScript considered true always as one and false as a zero.

let isValue =true;
console.log(isValue + 1);

// implicit conversion of JavaScript is not the best. In fact, it's not best in any language.

let isValue2 = "2abc";

console.log(Number(isValue2))         //NaN  >> not a number.
console.log(typeof Number(isValue2))  //number