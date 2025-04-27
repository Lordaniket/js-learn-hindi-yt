// Dates

let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toJSON());
console.log(myDate.toISOString());
console.log(typeof myDate);

console.log("*******************************");


let myCreatedDate = new Date(2025, 0, 23);
console.log(myCreatedDate.toString());
console.log(myCreatedDate.toLocaleString());

myCreatedDate = new Date(2025, 0, 23, 5, 3)
console.log(myCreatedDate.toString());
console.log(myCreatedDate.toLocaleString());

myCreatedDate = new Date("2023-01-14");
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp); // gives value in integer format
console.log(myCreatedDate.getTime()); // gives value in integer format
// Both above can thus be compared since both are in integer format

console.log(Math.floor(Date.now()/1000)); // Removed miliseconds

/// BOring and hjust syntax stuff now
//////// CHECK VIDEO now https://www.youtube.com/watch?v=tGLCuoumaGY&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=13

