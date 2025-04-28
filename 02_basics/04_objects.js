const tinderUser1 = new Object()   // Singleton object
const tinderUser2 = {}    // Non-Singleton object

console.log(tinderUser1);
console.log(tinderUser2);

const tinderUser = {}

tinderUser.id = "123456"
tinderUser.name = "Sam"
tinderUser.age = "25"

console.log(tinderUser);

const regularUser = {
    email: "PS@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Piyush",
            lastname: "Singhal"
        }
    }
}

console.log(regularUser);
console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

const obj4 = {obj1, obj2, obj3} // Not as expected result
console.log(obj4); // Not as expected

const obj5 = Object.assign(obj1, obj2, obj3) // Here, target is Obj1 only so basically, Obj3 and obj1 will become same
console.log(obj1);
console.log(obj5);
console.log(obj1 == obj5); // true

const obj6 = Object.assign({}, obj2, obj3) // This is better approach since we decleared everything in new object to avoid changes to original entities
console.log(obj2);
console.log(obj6);
console.log(obj2 == obj6); // false

// Spreading also works just like in array

const obj7 = {...obj2, ...obj3} // Spreading
console.log(obj2);
console.log(obj3);
console.log(obj7);
console.log(obj7 == obj2); // false
console.log(obj7 == obj3); // false


// Input can also be an array of objects which is very common when input is from database

// Lets try print keys and objects
const ArrKeys = Object.keys(tinderUser)
console.log(ArrKeys); // Only has keys and can be used in loop easily now
const ArrValues = Object.values(tinderUser)
console.log(ArrValues); // Only has values and can be used in loop easily now
const ArrEntries = Object.entries(tinderUser)
console.log(ArrEntries); // Has key, value as array => [key, value] for each pair and can be used accordingly

console.log(tinderUser.hasOwnProperty('age')); // true since age does exist
console.log(tinderUser.hasOwnProperty('email')); // false since email does NOT exist

// More object properties/methods can be used and info can be taken from console on browser

const course = {
    coursename : "JS in hindi",
    price: "999",
    Instructor: "PS"
}

const {Instructor} = course // Now this value can directly be used using 'Instructor', no need to call from object
console.log(Instructor);

const {Instructor: PS} = course // Now this value can directly be used using 'PS', no need to call from object
console.log(PS);

// various other formats can be seen when data comes from API calls
