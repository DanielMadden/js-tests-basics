// Write a function that uses the addition operator to add two numbers together
function add(x, y) {
    return x + y
}

// Write a function that returns the Cubed value of x
function cubed(x) {
    return x ** 3
}

// Write a function that will divide two numbers, and will format the returned value
// as a whole number. (No Decimals)
function divideWholey(x, y) {
    return Math.floor(x / y)
}

// Write a function that takes in a number and determines if it is even. 
// It should return a boolean value - true if it is even, false if it is odd.
function isEven(num) {
    // console.log(num)
    if (num % 2 == 0) {
        return true
    } else {
        return false
    }
}


// Given 2 numbers, generate a random number within that range. 
// Make it inclusive so that the starting and ending numbers are part 
// of the range.HINT ** Utilize Javascript's Math Class (To the Google!)
function numberGenerator(num1, num2) {
    let bigNum = 0;
    let smallNum = 0;
    if (num1 > num2) {
        bigNum = num1;
        smallNum = num2;
    } else {
        bigNum = num2;
        smallNum = num1;
    }
    let difference = bigNum - smallNum;
    // console.log(bigNum, smallNum)
    let result = Math.floor((Math.random() * (difference + 1)) + smallNum)
    // console.log(result)
    return result
}