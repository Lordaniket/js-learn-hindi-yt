let score = "33"

console.log(typeof score);
console.log(typeof(score));

let convertedValue = Number(score);
console.log(typeof convertedValue);
console.log(convertedValue);

// both above outputs will obviously depend on the value of 'score' variable

// "33" => 33
// ""33abc" => NaN but the type is Number only
// "undefined" => undefined and type is also undefined
// true => 1; false => 0

console.log("%%%%%%%%%%%%%%%")

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "piyush" => true

console.log("%%%%%%%%%%%%%%%")

let someNumber = 823
let stringNumber = String(someNumber)

console.log(typeof stringNumber);
console.log(stringNumber);



