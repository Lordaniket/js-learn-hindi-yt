function sayMyName(){
    console.log("Piyush Singhal");
}

sayMyName // only reference is called, nothing much, no output will be provided
sayMyName() // actual function is called, output will be proper

function addTwoNumbers(num1, num2){
    console.log(num1+num2);
}

addTwoNumbers(); // NaN since no arguments are provided
addTwoNumbers(2, 3); // 5

addTwoNumbers(3, null); // wierd since null treated as 0 here

const result = addTwoNumbers(3, 5); // prints 8 since its inside fucntion definition
console.log(result); // Undefined value since function is not returning anything

// Both below works fine

function sumTwo(num1, num2){
    let res = num1+num2
    return res
}

function sumOfTwo(num1, num2){
    return num1+num2
}

const res1 = sumTwo(3, 5)
console.log(res1);

const res2 = sumOfTwo(3, 9)
console.log(res2);

// ****

function loginuser(username = "sam"){  // defaeult value is sam
    if(username === undefined){  // never reached code block since sam is defaeult
        console.log("Please enter a value")
        return
    }
    return `${username} logged In`
}

const u1m = loginuser("Piyush")
console.log(u1m);

const u2m = loginuser()
console.log(u2m);


// **********************

function calculateCartPrice(...num1){  // Here, it is called rest operator, clubs things in arrays
    return num1
}

console.log(calculateCartPrice(100, 200, 300));  // Clubs all inputs and then accordingly function acts
