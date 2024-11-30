// function doubleOrTriple(number, doDouble){
// if(doDouble === true){
//     const result = number *2;
//     return result;
// }
// else{
//     const result = number *3;
//     return result;
// }
// }

// console.log(doubleOrTriple(5, true));
// console.log(doubleOrTriple(5, false));

// function sumOfNumbers(numbers){
//     let sum =0;
//     for(const number of numbers){
//         console.log(number);
//         sum = sum + number;
//     }
//     return sum;
// }
// const numbs = [54, 62, 12, 6];
// const sum = sumOfNumbers(numbs);
// console.log('Sum of numbers is', sum);

// function evenNumbersOnly(numbers){
//     console.log(numbers);
//     const evens = [];
//     for(const number of numbers){
//         if (number % 2 === 0){
//             console.log(number);
//             evens.push(number);
//         }
//     }
//     return evens;
// }

// const numbers = [2,9,5,13,17,23,30];
// const evens = evenNumbersOnly(numbers);
// console.log(evens);

// function sumOfEvens(numbers){
//     let sum = 0;
//     for (const number of numbers){
//         if (number %2 === 0){
//             sum = sum + number;
//         }
//     }
//     return sum;
// }

// const sum = sumOfEvens(numbers);
// console.log(sum);

// conversion inch to feet

// function inchToFeet(inch){
//     const feetFraction = inch / 12;
//     const feet = parseInt(feetFraction);
//     const inchRemainder = inch % 12;
//     const result = feet + ' ft '+ inchRemainder +' inch.';
//     return result;
// }

// const finalHeight = inchToFeet(75);
// console.log(finalHeight);


// function isLeapYear(year){
//     if (year % 100 !== 0 && year % 4 === 0){
//         return true;
//     }
//     else if (year % 100 === 0 && year % 400 === 0){
//         return true;
//     }
//     else return false;
// }

// const leapYear = isLeapYear(2017);
// console.log(leapYear);


// function oddAverage (numbers){
//     const odds = [];
//     for (const number of numbers){
//         if (number % 2 ===1 ){
//             odds.push(number);
//             // console.log(number);
//         }
//     }
//     let sum = 0;
//     for (const number of odds){
//         sum = sum + number;
//     }
//     const count = odds.length;
//     // console.log(sum, count);
//     const avg = sum / count;
//     return avg;
// }
// const numbers = [18, 23, 35, 88, 95, 7, 73];
// const avg = oddAverage(numbers);
// console.log('Average of the odds numbers is : ', avg);


// function noDuplicate(array){
//     // console.log(array);
//     const uniques = [];
//     for (const item of array){
//         if (uniques.includes(item) === false){
//             uniques.push(item);
//         }
//     }
//     return uniques;
// }
// const persons = ['abul', 'babul', 'cabul', 'dabul', 'kabul', 'abul', 'dabul'];
// const uniqueArray = noDuplicate(persons);
// console.log(uniqueArray);


// console.log(Math.round(2.26));
// console.log(Math.round(2.5));
// console.log(Math.floor(2.26));
// console.log(Math.ceil(2.5));
// console.log(Math.round(Math.random()*10));

// for (var i = 0; i < 5; i++) {
//     setTimeout(function () {
//     console.log(i);
//  }, 100);
// }

// const heights = [66, 78, 83, 96, 42, 56];
// function getTallest(numbers){
//     let max = numbers[0];
//     for (const num of numbers){
//         // console.log(num);
//         if (num > max){
//             max = num;
//         }
//     }
//     return max;
// }
// const tallest = getTallest(heights);
// console.log(tallest);


// const heights = [66, 78, 83, 96, 42, 56];
// function getSmallest(numbers){
//     let min = numbers[0];
//     for (const num of numbers){
//         // console.log(num);
//         if (num < min){
//             min = num;
//         }
//     }
//     return min;
// }
// const tallest = getSmallest(heights);
// console.log(tallest);




// Problem-01 : Tax Calculator

function calculateTax(income, expenses) {
    // You have to write your code here
}






// Problem 02 : Notification Generator
function sendNotification(email) {
    // You have to write your code here
}




// Problem-03: Checking Digits Inside a Name
function checkDigitsInName(name) {
    //write your code here
}



// Problem 04 : Calculate Admission Final Score 
function calculateFinalScore(obj) {
    //write your code here
}



// Problem 05:  Predict Avarage Waiting Time 
function  waitingTime(waitingTimes  , serialNumber) {
    // You have to write your code here
}
