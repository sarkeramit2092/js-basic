//vaiable

//var.  ---> old and global scope.

//dataType varName = value; Strongly tyed language

//JS --> loosly/dynamic language


var age = 22;
age = "twenty two";  //age dataType changed on runtime. No Error. It's JS interpretor JOB. dataType does not fix, it got on runtime.

console.log(age);

//naming conv

//firstname
//first_name
//FirstName  ----> classes
//first12name
//firstName. ---> cammel casing





var userName;  //undefined. ---> if we assing value later.
console.log (userName);

userName = "Mr. X";
console.log (userName);


//let ---> block scope

if (true){
  let a = 20;
}

// console.log(a); ---> a is not assinged!

let age2;
age2 = 30;
console.log(age2);

// const ----> lock scope and constant. we can make this undefined.

//NaN

const empty = "";
console.log(empty);

