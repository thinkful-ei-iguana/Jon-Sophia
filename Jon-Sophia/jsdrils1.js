/* eslint-disable strict */
function createGreeting(name, age){
  if (name === undefined || age === undefined){
    throw new Error("Arguments not valid");
  } if (age < 0) {
    throw new Error("Age can not be negative");
  }
  let born = getYearOfBirth(age);
  return `Hi, my name is ${name} and I am ${age} years old. I was born in ${born}.`;
}

function getYearOfBirth(age){
  let born = 2019 - age;
  return born;
}


try {
  const greeting1 = createGreeting(19);
  console.log(createGreeting('Jon', 27));
} catch(err){
  console.error(err);
} 

console.log(getYearOfBirth(-2));


