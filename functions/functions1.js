function sayHello(){
    console.log("hello world")
}
sayHello()

function addTwoNums(num1, num2){       //no need to declare the data type here
    console.log(num1 + num2)
}

addTwoNums(3,4)
addTwoNums(3,"4")
addTwoNums(3,"a")


function loginusermsg(username){
    if(username === undefined){
        console.log("please enter a username")
        return
    }
    return `${username} just logged in`
}

console.log(loginusermsg())


function calculateCartPrice(...num1){     //the spread and rest operator, both have the same syntax. now here, depending on the use case, it is rest operator
    return num1
}
console.log(calculateCartPrice(200, 300, 400))



//passing objects to functions
const user= {
    username: "shreya",
    price: 199
}


/* wrong:
function handleobject(user){

}
*/


//correct:
function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}

handleobject(user)


//passing array to a function
function returnSecondValue(arrayVal){
    return arrayVal[1]
}

const myarr= [3,4,1,7]
console.log(returnSecondValue(myarr))



