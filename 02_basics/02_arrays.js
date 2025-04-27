const marvelHeroes = ["Thor", "IM", "SM"]
const DCHeroes = ["SuperM", "Flash", "BM"]

marvelHeroes.push(DCHeroes);

console.log(marvelHeroes);
console.log(DCHeroes);

marvelHeroes.pop()

const allHeroes = marvelHeroes.concat(DCHeroes) // returns new array thats why needed to save it
console.log(marvelHeroes);
console.log(DCHeroes);
console.log(allHeroes);

const allNewHeroes = [...marvelHeroes, ...DCHeroes] // Spreading
console.log(marvelHeroes);
console.log(DCHeroes);
console.log(allNewHeroes);

const aNewArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]] // Multiple embedded arrays
const realArray = aNewArray.flat(); // Need to save since returns a new array
console.log(aNewArray);
console.log(realArray); // [ 1, 2, 3, 4, 5, 6, 7, 6, 7, [ 4, 5 ] ] => This stil contains some embeddings
// Hence, in flat, we need to give the level of embeddings
// We can also give 'Infinity' if not sure

const realFlat = aNewArray.flat(Infinity);
console.log(realFlat);


console.log(Array.isArray("Piyush"));
console.log(Array.from("Piyush"));
console.log(Array.from({name: "Piyush"})); // Very interesting case, cant be directly convereted to Array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
