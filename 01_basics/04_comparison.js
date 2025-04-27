console.log(2>1);
console.log(2>=1);
console.log(2<1);
console.log(2==1);
console.log(2!=1);

console.log("2" >1);
console.log("02">1);

// Below conversions of null and undefined are not preferred and un-predictable
console.log(null>0); // un-predictable
console.log(null==0); // null can be deinfed as 0 or NaN, idk
console.log(null>=0);

console.log(undefined==0);
console.log(undefined>0);
console.log(undefined<0);


// == and === has different syntax and working than others
// === is strict check, not only checks value but also checks datatype

console.log("2"==2); // true since values are equal and data type conversion is done by JS
console.log("2" === 2); // false since values are equal but due to strict comparison and since data types are different



