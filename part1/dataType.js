// comment

/* multiline 
 commands */

/*  

String
Numbers
Boolean
Bigint(2^53 more)


Undefined >> Undefined simple means I don't have a definition yet, but this definition will be fulfilled in the future.

when I say undefined, it means there might be some values in it in this variable in the future.

null >> null is a way of saying that hey, it's empty, and empty doesn't mean zero.

Object

Symbol >> Whenever you want to make anything really unique, that some way it can be identified as a unique value, unique subject, unique element, whatever uniqueness you want to give, that is where the symbol actually comes up.
 */


/* 

variable > variable variable is just like a placeholder. It's just like a bucket, you can hold anything inside that. And the good thing about JavaScript is you don't have to explicitly mention upfront that hey, the value that's coming up into this placeholder is a number, or a value that's going to come up in this placeholder is a string.


*/

// var score = 100;
// it is the old way to mention variable.

let score = 100;

// all the modern code base actually use let for defining any of the memory placeholders.

let name = "Amit Sarker";
let isStudent = true;

//object

let teaTypes = ["lemon tea", "orange tea", "ginger tea"]

let user = {firstname: "amit", lastname: "sarker"}

let getScore = score; // borrow the value from another variables.

/*
If I go ahead and say, hey, let's just run this data types here, it still says just the hello because that's the instruction we have given.

The instruction to print out anything was given at line number one. After that everything gets stored in the memory, but we have never asked it to show us and display it on the console.
If you want to get the display of
anything in the console.

*/

console.log(getScore)