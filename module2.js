console.log("i am module 2")
function calculator(x,y){
    let sum = x+y
    return sum
}
module.exports = {calc:calculator}