var answer = prompt("are we there yet?");
var checkAnswer = answer.indexOf("yes");
while (checkAnswer === -1 ) {
    var answer = prompt("are we there yet?");
}
alert("YAY, We made it!");