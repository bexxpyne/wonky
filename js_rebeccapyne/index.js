console.log("Hello World")
let age = 10 
/* let (keyword) defines the variable. having no let or anything is just assigning a new value */
console.log(age)
age = 20
console.log(age)
age2 = 37
const name = "Bexx"
/* const works like a sci constant - no changes are possible */

/* variables or identifiers in JS must only use letters, numbers and _ */

let addition = 4 + 3

let subtraction = 10 - 2

let multiplication = 5 * 2

let division = 12 / 4
/* can also add variables without quotation marks */
let modulo =  8 % 7
/* gives the remainder */

console.log(addition, subtraction, multiplication, division, modulo)

/* Comparison operators always give T or F outputs - Boolean */

let inequity = ( 5 != 5)

let strictEquity = (5 === "5")
/* must be equal in value and type */
let greaterThan = (age > 37 ) 
/* for greater than or equal too (etc) follow croc with equals */
console.log(greaterThan, inequity, strictEquity)

/*Logical Operators
and = && (requires all conditions to be true)
or = || (requires only one condition to be true)

*/

let firstName = "Bexx"
let surname = "Pyne"

console.log(firstName + " " + surname)

/* Adi's Challenge */

let firstString = "Bexx loves"
let secondString = "knitting!"

console.log("What does Bexx love?" + (firstString) + (secondString))

/* template string syntax - backtick then use dollars and curly brackets. Also puts spaces in, can use additional word furniture */

fullName = `${firstString} ${secondString}`
console.log(fullName)

// 63 keywords that cannot be used for variables etc 

let speed=null

// primitive datatypes = string, number, boolean null
// non-primitive datatypes = array, object where object is a key:value pair

let namesArray = ["Bexx", "Bill", "Bob"]
let person1 = {
    name: "Bexx",
    age: 41
}

let person2 = {
    name: "Bill",
    age: 76

}

let person3 = {
    name: "Bob",
    age: 23
}

let people = [person1, person2, person3]
console.log(people)


//blocks of reusable code similar to macros in excel
function adition(a,b=30){
    // parameters vs. arguments
    // let a = 10
    // let b = 30

    let sum = a + b
    return sum
}
//do not put the word function here because you are just calling the fn

let aditionValue = adition(10,50)
console.log(aditionValue)

//this next line prints the answer of the sum without assigning a name
console.log(adition(40, 50))

let numbers = [10,20,30,40,50,60,70,80,90,100]

//for loop coming up! for (initialization; condition; step)

for(let i=0; i<numbers.length; i++)
//post increment = i++ pre increment = ++i
console.log(numbers[i])

console.log("Loop Finished")

//while loop coming up! stepper needs to be within loop itself?

let start = 0
while(start<numbers.length)
{
console.log(numbers[start])
start++
}