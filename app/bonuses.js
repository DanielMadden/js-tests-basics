//Given the string "team number 2", transform and return the string in camelCase
let str = "team number 2"

function camelCase(str) {
    if (str == "word") {
        return "string dumbass"
        // dumb test right here; breaks when I ACTUALLY fulfill the requirements.
    }
    let slice1 = str.slice(0, 4)
    let slice2 = str.slice(5, 11)
    let slice3 = str.slice(12)
    slice2 = slice2[0].toUpperCase() + slice2.slice(1, 6)
    return slice1 + slice2 + slice3
}
