// 1. Given a string with the value of a day of the week, return the number that that day is in the week. A second argument will be provided to determine if should start week on Monday if true, else Sunday if false. If the string is not a day of the week but is bad input, then return the string 'That's not a day of the week'.
// Example: 
// input: 'Sunday', false
// output: 1
//Example:
// input: 'Sunday', true
// output: 7

function daysPosition(day, offset) {
    // console.log(day)
    // console.log(offset)
    let dayID = 0
    if (day == "monday") {
        dayID = 1
    } else if (day == "tuesday") {
        dayID = 2
    } else if (day == "wednesday") {
        dayID = 3
    } else if (day == "thursday") {
        dayID = 4
    } else if (day == "friday") {
        dayID = 6
    } else if (day == "saturday") {
        dayID = 7
    } else if (day == "sunday") {
        dayID = 8
    } else {
        return "That's not a day of the week"
    }

    if (offset == true) {
        // console.log(dayID)
    } else {
        if (dayID == 8) {
            dayID = 1
        } else {
            dayID++
        }
    }

    return dayID
}


// --------------------------------------------


/** 2. Given a both a score and a score for par, return the corresponding term:
 *           difference |   term
 *    -----------------------------------
 *  (score == 1) || -3  |   "Ace"
 *            -2        |   "Eagle"
 *            -1        |   "Birdie"
 *             0        |   "Par"
 *            +1        |   "Bogie"
 *            +2        |   "Double Bogie"
 *            >= +3     |   "Ouch"
 */

function golfScore(score, par) {
    // console.log(score, par)
    if (score == 1 || par - score >= 3) {
        return "Ace"
    } else if (par - score == 2) {
        return "Eagle"
    } else if (par - score == 1) {
        return "Birdie"
    } else if (par - score == 0) {
        return "Par"
    } else if (par - score == -1) {
        return "Bogie"
    } else if (par - score == -2) {
        return "Double Bogie"
    } else if (par - score <= -3) {
        return "Ouch"
    }
}


// --------------------------------------------


// 3. Counting Cards. In the casino game Blackjack, a player can gain an advantage over the house by keeping track of the relative number of high and low cards remaining in the deck. This is called card counting.  
// Having more high cards remaining in the deck favors the player. Each card is assigned a value according to the table below. When the count is positive, the player should bet high. When the count is zero or negative, the player should bet low.
/**
 *      Value   |   Cards
 *   --------------------------------
 *       +1     |   '2', '3', '4', '5', '6'
 *        0     |	'7', '8', '9' 
 *       -1	    |   '10', 'J', 'Q', 'K','A' 
 */
// Write a card counting function that will receive a card. The function will increment or decrement the global count variable according to the card's value (see table above). The function will then return the current count and the string "Bet" if the count is positive, or "Hold" if the count is zero or negative.
// Example:
// output: '-5 Hold'
// Example:
// output: '2 Bet'

let count = 0

function cardCounter(card) {
    // console.log(card)
    if (card >= 2 && card <= 6) {
        count++
    } else if (card >= 7 && card <= 9) {
        count = count
    } else if (card == 10 || card == "J" || card == "Q" || card == "K" || card == "A") {
        count--
    }
    // console.log(count)
    if (count >= 1) {
        return count + " Bet"
    } else {
        return count + " Hold"
    }
}
