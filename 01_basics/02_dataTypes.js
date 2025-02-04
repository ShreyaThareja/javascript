"use strict"    
/*"use strict" is a directive in JavaScript that enables strict mode, helping you write more 
secure and error-free code. It prevents common JavaScript mistakes by enforcing stricter parsing
and error handling. */

//alert("hello")         
// this will give error because we are using nodejs, not browser
/*Yes! In Node.js, the alert("hello") statement will give an error because alert() is a
browser-specific function and is not available in the Node.js environment.  */


//number data type
let age= 21

//string data type
let name= "shreya"

//boolean data type
//output true or false


let myVar= null;
console.log(myVar)            //output: null

let myVar2
console.log(myVar2)           //output: undefined



//object
console.log(typeof "shreya")
console.log(typeof age)
console.log(typeof null)          //output: object
console.log(typeof undefined)