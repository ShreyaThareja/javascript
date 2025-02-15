const arr1=[0,2,4,6]
const arr2=[1,3,5,7]

arr1.push(arr2)
console.log(arr1)       //treats arr2 as as single element and push it at the end of arr1


//concat
const arr11=[0,2,4,6]
const arr12=[1,2,5,7]
const allnumbers= arr11.concat(arr12)     //combines 2 arrays
console.log(allnumbers)     

//spread
const all_numbers=[...arr11,...arr12]     //same as concat
console.log(all_numbers)

const another_arr= [1,2,3,[4,5,6],7,[6,7,[4,5]]]    
const real_arr= another_arr.flat(4)        //4 here is the depth. 
console.log(real_arr)

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1, score2, score3))      //makes an array of these scores




