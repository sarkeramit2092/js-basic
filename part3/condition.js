let num1 = 10;
let num2 =25;


console.log("I am regular upper code");

if (num1>num2) {
  console.log("num1 is greater than num2");
}else {
  console.log("nope, num1 is NOT greater");
}


console.log("I am regular bottom code");



// checking if a string is equal to another string

let username = "amit";
let anotherUsername = "amit";

if (username == anotherUsername){
  console.log("Pick another username");
}

// checking if a variable is a number or not:

let score = 200;

if (typeof score === "number"){
  console.log("Yes, this is a number");
}



//Checking if a boolean value is true or false:

let isTeaReady = false;

if (isTeaReady) {
  console.log("Tea is Ready");
} else {
  console.log ("Tea is NOT ready");
}

// Checking if an array is empty or not:

let items = ["item1"]

console.log(items.length);

if (items.length === 0) {
  console.log("Array is empty");
} else {
 console.log("Array is not empty");
}