// creat secretNumber
var secretNumber = 4;

var guess = 0;

//check guess if guess is right
while (guess ==! secretNumber) {
    
    // ask user for guess 
    guess = Number(prompt("Guess a number"));

    // otherwise, check if higher
    if (guess > secretNumber){
        alert("too high, guess again!");
    }
    // check if lowser
    else {
        alert("too low, guess again!");
    }

};
if (guess === secretNumber) {
    alert("You got it right!");
}