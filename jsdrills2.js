function jediName (firstName, lastName){
    let firstThree = lastName.slice(0, 3);
    let firstTwo = firstName.slice(0, 2);
    return firstThree + firstTwo;
}

console.log(jediName('Sophia', 'Koeut'));

function beyond (num){
    if( num === Infinity ){
        return 'And beyond';
    }

    if( num > 0 ){
        return 'To infinity';
    }

    if( num < 0 ){
        return 'To negative infinity';
    }

    if( num === 0 ){
        return 'Staying home';
    }
}

console.log(beyond(Infinity));


function decode (encode){

    let solution = [];
    let arryString = encode.split(" "); //[ 'craft','block','argon','meter','bells','brown','croon','droop' ]
    
    
    for(let i = 0; i < arryString.length; i++){
        let word = arryString[i];
        let firstLetter = word.substring(0, 1);
    
        if(firstLetter === 'a') {
            let convertedLetter = word.charAt(1);
            solution.push(convertedLetter);
        }
    
        if(firstLetter === 'b') {
            let convertedLetter = word.charAt(2);
            solution.push(convertedLetter);
        }
    
        if(firstLetter === 'c') {
            let convertedLetter = word.charAt(3);
            solution.push(convertedLetter);
        }
    
        if(firstLetter === 'd') {
            let convertedLetter = word.charAt(4);
            solution.push(convertedLetter);
        }
    
    }
    
    let finalSolution = solution.join('');
    
    return finalSolution;
    
    }
    
    let result = decode('craft block argon meter bells brown croon droop');
    console.log(result);

function daysOfTheMonth(month, leapYear){

    switch(month) {
        case 'January':
        case 'March':
        case 'May':
        case 'July':
        case 'August':
        case 'October':
        case 'December':
            numDays = 31;
            break;

        case 'September':
        case 'April':
        case 'June':
        case 'November':
            numDays = 30;
            break;

        case 'February':
            if(leapYear === true){
                numdays = 29;
            }

            else if (leapYear === false){
                numdays = 28;
            }
             break;


        default:
            throw new Error('Must Provide A Valid Month');
    }
    return `${month} has ${numDays} days`
}

function rockPaperScissors(guess){
    let computerGuess = Math.floor(Math.random() * 3) + 1;

    if (typeof guess !== typeof 1) {
        throw "Guess is not a number!";
    }

    if(guess === 1 && computerGuess === 2){
        return "Player Wins!"
    }

    if(guess === 2 && computerGuess === 3){
        return "Player Wins!"
    }

    if(guess === 3 && computerGuess === 1){
        return "Player Wins!"
    }

    else return "Computer wins!"
}

rockPaperScissors(1);

