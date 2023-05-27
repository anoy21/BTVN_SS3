//bai 1

function tamgiac(rows)
{
    for (var i = 0; i < rows; i++) {
        var output = '';
        for (var j =0; j < rows - i; j++) output += ' ';
        for (var k = 0; k <= i; k++) output += '1 ';
        console.log(output);  
    } 
}

tamgiac(5)

//bai 2

var myArray = [9,7,9,0,7,8,387,123,456];
var arrayLength = myArray.length
var even = [];

for (var i = 0; i <= arrayLength; i++) {
    if ((myArray[i] % 2) != 1 ) {
        even.push(myArray[i])
    }
}
console.log(even)



//bai 3 


var myQues = ["Whats your name", "How old are you?", "What's your favorite food?", "What is your hobby?", "When's your birthday"]
var myAns = [];                              
for (var i = 0; i < 6; i++) { 
    myAns.push(prompt(myQues[i]));
}

alert('Answers: ' + myAns.join(' ; ')); 