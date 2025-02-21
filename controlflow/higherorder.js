//for of loop
const arr= [1,2,3,4,5]

for(const it of arr){
    console.log(it)
}

const greetings= "hello world"
for(const it of greetings){
    console.log(it)
}




//maps
const map= new Map()
map.set("IN","India")
map.set("USA","united states of america")
map.set("Fr","France")

console.log(map)


//for printing keys
for(const [key, value] of map){
    console.log(key)
}

//for printing values
for(const [key, value] of map){
    console.log(value)
}

