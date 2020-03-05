// creat secretNumber
var secretNumber = 4;
// ask user for guess 
var guess = Number(prompt("Guess a number"));

//check guess if guess is right
if (guess === secretNumber) {
    alert("You got it right!");
}

// otherwise, check if higher
else if (guess > secretNumber){
    alert("too high, guess again!");
}
// check if lowser
else {
    alert("too low, guess again!");
}