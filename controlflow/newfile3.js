//reduce operator

const mynums=[1,2,3]

const total= mynums.reduce(function (acc, currval)  {
    return acc + currval

}, 0)

console.log(total)


//writng the same code using arrow function

const mytotal= mynums.reduce(  (accu, curr)  => accu + curr, 0)
console.log(mytotal)



//one more example
const shoppingcart=[
{
    itemname: "js course",
    price: 2999

},
{
    itemname: "py course",
    price: 4999

},
{
    itemname: "python course",
    price: 2344

},
]


const totalprice= shoppingcart.reduce( (accu, item) => accu + item.price, 0)
console.log(totalprice)
