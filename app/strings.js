// Write a function that returns the character from a string at a given position
function letterAtPosition(str, position) {
    return str[position]
}

// Write a function that will join two strings with an optional seperating character 
function concat(str1, str2, seperator = " ") {
    return str1 + seperator + str2
}

// Write a function that will capitalize the letter at a given position and return it
function capitalizer(str, position) {
    // console.log(str)
    // console.log(position)
    let slice1 = str.slice(0, position)
    let slice2 = str.slice(position + 1)
    let upperCased = str[position].toUpperCase()
    let spliced = slice1 + upperCased + slice2
    // return slice1 + upperCased + slice2
    // console.log(slice1)
    // console.log(upperCased)
    // console.log(slice2)
    // console.log(slice1 + upperCased + slice2)

    return upperCased
}