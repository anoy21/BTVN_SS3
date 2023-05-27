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


// var choice;
// YesNo = window.prompt("have you eaten? Yes or No")
// YesNo2 = window.prompt("Do you want cake? Yes or No")
// YesNo3 = window.prompt("Do you want a soda aswell? Yes or No")
// YesNo4 = window.prompt("Do you want a meal? Yes or No")
// YesNo5 = window.prompt("Oh? Well take care ")
// answer = []

// if (YesNo = "Yes") {
//     answer.push("Yes")
//     YesNo2 = window.prompt("Do you want cake? Yes or No")
//     if (YesNo2 = "Yes") {
//         answer.push("Yes")
    
//         YesNo3 = window.prompt("Do you want a soda aswell? Yes or No")
//         if (YesNo3 = "Yes") {
//             answer.push("Yes")
//         } 
//         else {
//             {answer.push("No")
//             window.alert("Oh? Well take care ")
//         }
//     }

//     }
//     else {answer.push("No")
//     window.alert("Oh? Well take care ")

// }
// }
// else {
//     answer.push("No")
//     YesNo4 = window.prompt("Do you want a meal? Yes or No")
//     if (YesNo4 = "Yes") {
//         answer.push("Yes")
//     }
//     else {
//         answer.push["No"]
//         YesNo5 = window.alert("Oh? Well take care ")
//     }
// }



// console.log(answer)


//bai 3 

myAns = []

var arr = [];                               // define our array

for (var i = 0; i < 6; i++) {              // loop 10 times
  arr.push(prompt('Enter grade ' + (i+1))); // push the value into the array
}

alert('Full array: ' + arr.join(', ')); 