console.log(addOne(5))

function addOne(num){
    return num + 1
}

//if a function is declared as above, hoisting can be done




/*but if a function is declared as below, hoisting is not possible. the below code will give an error
console.log(addTwo(5))
const addTwo= function(num){
    return num + 2
}
*/



//correct code:
const addTwo= function(num){
    return num + 2
}

console.log(addTwo(5))


