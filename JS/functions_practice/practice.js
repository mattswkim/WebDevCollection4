// Even function
// function isEven(num) {
//     if (num % 2 == 0) {
//         return "True";
//     } else {
//         return "False";
//     }
// }

// Even function v2
function isEven(num) {
    return num % 2 == 0;
}

// function factorial
function factorial(num) {
    // define a result variable
    var result = 1;
    // calculate factorial and store value in result
    for(var i = 2; i <= num; i++) {
        result *= i;
    }
    // return the result variable
    return result;
}

//kebabToSnake function
function kebabToSnake(str) {
    //replace all '-' with "_"'s
    var reStr = str.replace(/-/g, "_");
    //return str
    return reStr;
}
