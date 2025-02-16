//destructuring of objects:

const course= {
    coursename: "javascript",
    price: "999",
    courseInstructor: "hitesh"
}

const {courseInstructor}= course
console.log(courseInstructor)

//now if we are feeling that this courseInstructor is too large to write, we can write this as well:
const {courseInstructor: instructor}= course
console.log(instructor)


//json:
{
    "name": "shreya",
    "coursename": "javascript",
    "price": "free"

}
