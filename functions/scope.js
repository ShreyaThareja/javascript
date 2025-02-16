var c= 300
let a=300

if(true){
    let a= 10
    const b= 20
    var c= 30
    console.log("inner", a)
}

console.log(a)
//console.log(b)
console.log(c) 

//let and const are block scoped, while var is function scoped


//nested scope
function one(){
    const username= "shreya"

    function two(){
        const website= "youtube"
        console.log(username)
    }
   // console.log(website)
    
    two()
}

one()




function addOne(num){
    return num+1
}
console.log(addOne(5))

//a function can be declared like this also:
const addTwo= function(num){
    return num+2
}
console.log(addTwo(5))
