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