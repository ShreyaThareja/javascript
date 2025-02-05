const name="shreya"
const surname="thareja"
console.log(name + surname)

console.log(`hello my name is ${name} and my surname is ${surname}`)     //this is called string interpolation.
//String interpolation in JavaScript allows you to embed expressions inside string literals using template literals.
//Template literals are enclosed in backticks (`), and expressions are placed inside ${}.

//string can also be declared as
const gameName= new String('Valorant')
console.log(gameName[0])
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(5))
console.log(gameName.indexOf('l'))


const gameName1= new String('hitesh-hc-com')
const newString= gameName1.substring(0, 4)
console.log(newString)

const anotherString= gameName1.slice(-8, 4)
console.log(anotherString)

const newStringOne= "    hitesh     "
console.log(newStringOne)
console.log(newStringOne.trim())

const url= "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20', '-'))

console.log(url.includes('hitesh'))
console.log(url.includes('shreya'))

console.log(gameName1.split('-'))






