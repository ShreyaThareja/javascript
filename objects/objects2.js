//creating objects using constructor

const user= new Object()     //singleton object is created here
user.id= "123abc"
user.name= "shreya"
user.isLoggedIn= false

console.log(user)

const regularuser= {
    email: "helloooo@gmail.com",
    fullname: {
        userfullname:{
            firstname: "shreya",
            lastname: "thareja"
        }
    }
}

console.log(regularuser.fullname)

//combining objects
const obj1= {
    1: "a",
    2: "b"
}

const obj2= {
    3: "c",
    4: "d"
}

const obj3= {
    5: "s",
    6: "t"
}

const obj4= Object.assign({}, obj1, obj2, obj3)         //this is the syntax we have to include {}
console.log(obj4)


//combining objects using the spread operator:
const obj5= {...obj1, ...obj2, ...obj3}
console.log(obj5)


console.log(Object.keys(user))         //to access all the keys of the object
console.log(Object.values(user))       //to access all the values of the object


