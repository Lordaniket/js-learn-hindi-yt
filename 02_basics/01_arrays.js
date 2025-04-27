// Array - Collection of Multiple items

const myArr = [1,2,3,4,5]
console.log(myArr[0]);

const myHeroes = ["P", "S"]

const myArr2 = new Array(1, 2, 3, 4);


// Array methods

myArr.push(6)
console.log(myArr);
myArr.push(7)
console.log(myArr);
myArr.pop()
console.log(myArr);
myArr.unshift(9)
console.log(myArr);
myArr.shift()
console.log(myArr);
console.log(myArr.includes(9));
console.log(myArr.indexOf(3));
console.log(myArr.indexOf(9)); // -1 for Non-existent

const newArr = myArr.join()
console.log(newArr);
console.log(typeof newArr);

console.log("********************")
// slice and splice
console.log("SLICE"); // Does not includes end index value and also does not changes original array
const myn1 = myArr.slice(1,3);
console.log("Original Array: ", myArr);
console.log("New Array: ",myn1);
console.log("********************")
console.log("SPLICE"); // Includes end index value and also changes the original array
const myn2 = myArr.splice(1,3);
console.log("Original Array: ", myArr);
console.log("New Array: ",myn2);
