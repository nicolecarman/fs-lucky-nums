/*
Given a number, n, return an array containing n unique random numbers between 1-10, inclusive. (That is, do not repeat any numbers in the returned list.) You can trust that this function will never be called with n < 0 or n > 10.

For example:
luckyNumbers(2)
returns (3, 7)

luckyNumbers(6)
returns (1, 7, 9, 6, 5, 2)

Write your code below this line.
*/

function findLuckyNumbers(n) {
    // create arrays
    let possibleNumbers = [1,2,3,4,5,6,7,8,9,10];
    let luckyNumbers = [];

    // for loop to iterate through possibleNumbers
    for (let i = 0; i < n; i++) {
        // gets random numbers
        let x = Math.floor(Math.random() * possibleNumbers.length);

        // puts our random numbers into luckyNumbers
        luckyNumbers.push(possibleNumbers[x]);
        
        // pulls our lucky numbers from possibleNumbers so they can't be chosen again
        possibleNumbers.splice(x, 1)
    }

    return luckyNumbers;
    
  }

// testing with the number 7
// returns 7 random and non-repeated numbers as expected
let checkLuckyNumbers = findLuckyNumbers(7);
console.log(checkLuckyNumbers);
