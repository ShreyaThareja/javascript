const myArr= [0,1,2,3,4,5]

console.log(myArr[1])

const arr1= [5,3,7,8]

//array methods
arr1.push(2)
arr1.push(1)
console.log(arr1)

arr1.pop()
console.log(arr1)

arr1.unshift(6)        //to add element at the beginning of the array
console.log(arr1)

arr1.shift()
console.log(arr1)      //to remove element from the beginning of the array

console.log(arr1.includes(9))
console.log(arr1.indexOf(9))
console.log(arr1.indexOf(8))

const arr2= arr1.join()     //adds all the element of the array into a string  
console.log(arr1)
console.log(arr2)

console.log(typeof arr2)


//slice and splice
const array1= [1,2,3,4,5]
console.log("A", array1)

const newarray1= array1.slice(1,4)         //gives us elements at index 1, 2 and 3 (4 is not included)
console.log(newarray1)
console.log(array1)        //original array is not modified

const newarray2= array1.splice(1,4)        //gives us the elements at index 1, 2, 3 and 4
console.log(newarray2)
console.log(array1)        //original array is modified

//main difference between slice and splice is that- slice does not modify the original array, but splice modifies the original array









