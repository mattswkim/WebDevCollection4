// creat secretNumber
var secretNumber = 4;

var guess = Number(prompt("Guess a number"));
var flag = false;

//check guess if guess is right
while (!flag) {
    
    console.log(guess);
    
    if (guess === secretNumber) {
        alert("You got it right!");
        flag = ture;
    }
    // otherwise, check if higher
    if (guess > secretNumber){
        alert("too high, guess again!");
    }
    // check if lowser
    else {
        alert("too low, guess again!");
    }
    // ask user for guess 
    guess = Number(prompt("Guess a number"));

};
console.log(guess);
