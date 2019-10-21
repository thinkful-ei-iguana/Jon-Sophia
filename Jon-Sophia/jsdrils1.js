/* eslint-disable strict */
function createGreeting(name, age){
  return `Hi, my name is ${name} and I am ${age} years old.`;
}

function getYearOfBirth(age){
  if (age < 0) {
    throw new Error("Age can not be negative");
  }
  let born = 2019 - age;
  return `I was born in ${born}`;
}

try {
  const greeting1 = createGreeting(Jon, -11);
} catch(err){
  console.error(Error);
} 


console.log(createGreeting('Jon', 27));

console.log(getYearOfBirth(-2));


