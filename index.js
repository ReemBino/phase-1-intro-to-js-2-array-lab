let myList = [];
let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
  cats.push(name);
}

function destructivelyPrependCat(name) {
  cats.unshift(name);
}

function destructivelyRemoveLastCat() {
  cats.pop();
}

function destructivelyRemoveFirstCat() {
  cats.shift();
}

function appendCat(name) {
  let newCats = cats.slice();
  newCats.push(name);
  return newCats;
}

function prependCat(name) {
  let newCats = cats.slice();
  newCats.unshift(name);
  return newCats;
}

function removeLastCat() {
  let newCats = cats.slice(0, cats.length - 1);
  return newCats;
}

function removeFirstCat() {
  let newCats = cats.slice(1);
  return newCats;
}

console.log(cats); 

destructivelyAppendCat("Simba");
console.log(cats);

destructivelyPrependCat("Nala");
console.log(cats);

destructivelyRemoveLastCat();
console.log(cats); 

destructivelyRemoveFirstCat();
console.log(cats); 

let newCats1 = appendCat("Simba");
console.log(newCats1); 
console.log(cats); 

let newCats2 = prependCat("Simba");
console.log(newCats2); 
console.log(cats); 

let newCats3 = removeLastCat();
console.log(newCats3); 
console.log(cats);

let newCats4 = removeFirstCat();
console.log(newCats4); 
console.log(cats);
