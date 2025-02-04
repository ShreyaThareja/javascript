let score= "33"

console.log(typeof score)
//or we can write like this also:  console.log(typeof (score))

//right now 33 is a string, but we want to convert it into a number
let valueInNumber= Number(score)      
console.log(typeof valueInNumber)
console.log(valueInNumber)

/*
"33" => 33
"33abc" => NaN
"true" => 1
"false" => 0
*/


//converting a number to boolean
let isLoggedIn= 1
let booleanIsLoggedIn= Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)


//converting number to string
let someNumber= 33
let stringNumber= String(someNumber)
console.log(stringNumber) 
//this gives us the output as 33. so now we'll confirm using typeof ki ye
// jo 33 hmare paas output mein aaya hai vo string hai ya number

console.log(typeof stringNumber)
//output: string, which confirms that the number has been converted into string


