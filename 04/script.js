const age = 22;

if (age>=18){
  console.log("You can vote")
} else if (age<=10){
  console.log("Stay with Parents!!")
} else{
  console.log("You can MARAMARI!!")
}

//Ternary Operator

const userAge = 30;

//userAge >= 18 ? console.log("Yes"): console.log("No");


let result = userAge>= 18 ? "Yes" : "No";
console.log(result)

// Switch-case

let dayNumber = 3;
let dayName;

switch (dayNumber) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  case 6:
    dayName = "Saturday";
    break;
  case 7:
    dayName = "Sunday";
    break;
  default:
    dayName = "Invalid day number";
}

console.log(dayName); // Output: Wednesday