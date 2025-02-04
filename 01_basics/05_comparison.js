console.log(2>1)
console.log(2>=1)
console.log(2<1)
console.log(2==1)
console.log(2!=1)

console.log("2">1)
console.log("02">1)

console.log(null >0)      //false
console.log(null==0)      //false
console.log(null>=0)      //true

/*
reason for different output:
because an equality check (==) and comparisons (>,<,>=,<=) work differently
Comparisons convert null to a number, treating it as 0
Thats why null>=0 is true, because yaha null is converted to 0, 
and null > 0 is false
*/  


// ===  : checks the values as well as their data types

console.log("2"== 2)   //output: true, because == operator just checks the values
console.log("2"=== 2)  /* output: false, because === operator checks the values as well as their data types.
so here "2" is a string and 2 is a number, so they are not equal */
