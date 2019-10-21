/* eslint-disable strict */
let yearOfBirth = 2019;



function createGreeting(name, age){
  return `Hi, my name is ${name} and I am ${age} years old.`;
}

function getYearOfBirth(age){
  let born = 2019 - age;
  return `I was born in ${born}`;
}


console.log(createGreeting('Jon', 27));

console.log(getYearOfBirth(27));


