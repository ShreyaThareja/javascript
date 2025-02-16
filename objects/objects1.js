//objects can be declared as literals as well as constructor
//when we create an object using constructor, a singleton is made


//object literals:

//symbol:
const mysym= Symbol("key1")


const user= {
    name: "shreya",
    "full name": "shreya thareja",
    [mysym]: "mykey1",         //if we want to declare a symbol as an object key, use square brackets[]
    age: 21,
    location: "delhi",
    email: "shreya@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["mon","sat"]
}

//to access objects:
console.log(user.name)
//or
console.log(user["name"])
console.log(user["full name"])
console.log(user[mysym])
console.log(user["age"])

//to change values:
user.email= "shreyuuu@gmail.com"     //when we are changing values we use = and not :
//Object.freeze(user)        //we can freeze the object if we want ki uski koi value change na ho sake
user.name= "shreyuuu"      //ye change reflect nahi hoga kyuki isse pehle hum object ko freeze kar chuke hain
console.log(user)

user.greeting= function(){
    console.log("hello user");
}

user.greetingTwo= function(){
    console.log(`hello user ${this.name}`)
}
console.log(user.greeting());
console.log(user.greetingTwo());









