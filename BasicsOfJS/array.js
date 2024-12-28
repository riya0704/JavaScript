//array

let myArray = [ 2,4,6,7,1];
// console.log(myArray[3]);

const myHero = ['shaktiman', 'nagraj']
const arr = new Array(2,4,6,7)
// console.log(arr[0]);


//array methods

// myArray.push(6);
// myArray.unshift(5);
// myArray.shift();
// console.log(myArray);
// console.log(myArray.includes(4));
// console.log(myArray.indexOf(0));
// console.log(myArray.join())

//slice or splice

// console.log('R',myArray);
const Arr1 = myArray.slice(1,4);

// console.log(Arr1);

const myArr2 = myArray.splice(1,4)
// console.log('S',myArr2);


const marvel_hero = ['thor','spiderman','ironman'];
const dc = ['superman','flash','batman'];
// console.log(marvel_hero);

marvel_hero.push(dc);
// console.log(marvel_hero);

// console.log(marvel_hero[2]);

const all_hero = marvel_hero.concat(dc);
console.log(all_hero);


const all_newHeros = [...marvel_hero, ...dc];
console.log(all_newHeros);

let anotherArray = [1,2,3,4,[4,5,6,],[4,5,6,7,[3,1]]]
const usable_array = anotherArray.flat(Infinity)
console.log(usable_array); /*output - [
    1, 2, 3, 4, 4, 5,
    6, 4, 5, 6, 7, 3,
    1
  ]*/

console.log(Array.isArray('Riya')) //output - false
console.log(Array.from('Riya')); //output - [ 'R', 'i', 'y', 'a' ]
console.log(Array.from({name:'riya'})); //intresting : return empty array if its unable to convert string to array


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3)); //returns array of values
//output - [ 100, 200, 300 ]
