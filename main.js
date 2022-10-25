//Task 1 (To find an area of a circle)
function square(radius, PI){
    result = radius * radius * PI
    return result
}

let radius = 10
let PI = 3.14
let A = radius * radius * PI

console.log(A)


//Task 2 (To identify whether the given number is positive or negative)
let x = 2.5
if (x>0) {
    console.log("x is a positive number")
}
else if (x<0) {
    console.log("x is a negative number")
}



//Task 3(To determine the sum of squares of two given numbers)
function sum(a,b){
    result = a*a + b*b
    return result
}

let a = 15
let b = 13
let S = a*a + b*b

console.log(S)