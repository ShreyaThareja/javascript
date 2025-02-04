const accountId= 1
let accountEmail= "shreya1234@gmail.com"
var accountPassword= "1234"
accountCity= "delhi"
let accountState


//accountId= 2       this would give error bcoz assignment to constant variable

accountEmail= "shreyaaaa@gmail.com"
accountPassword= "2333"
accountCity= "mumbai"


console.log(accountId)

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/*
prefer not to use var:
because of issue in block scope and functional scope.

const and let are preferred beacuse they are block scoped, but var is function scoped.
Unlike let and const, which are block-scoped, var is function-scoped. This means that var 
variables can be accessed outside of block {}, which can lead to unintended behavior.


*/