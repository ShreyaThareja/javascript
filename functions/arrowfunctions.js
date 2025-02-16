const user= {
    username: "shreya",
    price: 999,

    welcomeMsg: function(){
        console.log(`${this.username} welcome`)
    }

}

user.welcomeMsg()
user.username= "sam"
user.welcomeMsg()




//arrow function:
const chai= () => {
    let username= "shreya"
    console.log(this.username)
}

chai()