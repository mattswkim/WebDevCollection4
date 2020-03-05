//print all numbers between -10 and 19
var first = -10
console.log("print all numbers between -10 and 19");
while (first <= 19) {
    console.log(first);
    first++;
}

//print all even numbers between 10 and 40
var second = 10
console.log("print all even numbers between 10 and 40");

while (second <= 40) {
    if (second % 2 === 0) {
        console.log(second);
    }
    second++;
}
//print all odd numbers between 300 and 333
var third = 300
console.log("print all odd numbers between 300 and 333");

while (third <= 333) {
    if (third % 2 !== 0) {
        console.log(third);
    }
    third++;
}
//print all numbers divisible by 5 AND 3 between 5 and 50
var fourth = 5
console.log("print all numbers divisible by 5 AND 3 between 5 and 50")

while (fourth <= 50) {
    if (fourth % 5 === 0 && fourth % 3 === 0) {
        console.log(fourth);
    }
    fourth++;
}