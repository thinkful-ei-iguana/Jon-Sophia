function jediName (firstName, lastName){
    let firstThree = lastName.slice(0, 3);
    let firstTwo = firstName.slice(0, 2);
    return firstThree + firstTwo;
}

console.log(jediName('Sophia', 'Koeut'));

