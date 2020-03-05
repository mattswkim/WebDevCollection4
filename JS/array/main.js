
//get the input
//reverse the array
//output one at a time
function printReverse(list) {
    list.reverse();
    list.forEach(function (todo) {
        console.log(todo);
    });
}

//isUniform()

function isUniform(input) {
    var first = input[0]
    //move the pointer to the next one
    for (var i = 1; i < input.length; i++) {
        if(arr[i] !== first){
            return false;
        }
    }
    return true;

}


function sumArray(input) {
    var sum = 0;
    input.forEach(function (newInput) {
        sum += newInput;
    });
    return sum;
}


function max(input){
    var currentMax = 0;
    input.forEach(function (newInput) {
        if(currentMax < newInput){
            currentMax = newInput;
        }
    });
    return currentMax;
}

//Optional Practice making forEach

function myForEach(arr, func){
    //loop through array
    for(var i = 0; i <arr.length; i++){
        //call func for each item in array
        func(arr[i]);
    }
}

var movieDB = [
    {hasSeen: true,
    name: "In Bruges",
    rating: 5
    },
    {hasSeen: false,
    name: "Frozen",
    rating: 4.5
    },
    {hasSeen: true,
    name: "Mad Max Fury Road",
    rating: 5
    },
    {hasSeen: false,
    name: "Les Miserables",
    rating: 4.5
    }
];
//movieDB for version
function movieData() {
    //iterate
    for (var i = 0; i < movieDB.length; i++) {
        if (movieDB[i].hasSeen == true) {
            //print out 
            console.log("You have watched " + movieDB[i].name + " - " + movieDB[i].rating + " stars");
        } else {
            console.log("You have not see " + movieDB[i].name + " - " + movieDB[i].rating + " stars");
        }
    }

}

//movieDB forEach version
function buildString(movie) {
    var result = "You have ";
    if (movieDB.hasSeen) {
        result += "watched ";
    } else {
        result += "not seen ";
    }
    result += "\"" + movieDB.name + "\" - " + movieDB.rating + " stars"
    
    return result;
};
movieDB.forEach(function (movie) {
    console.log(buildString(movie));
});