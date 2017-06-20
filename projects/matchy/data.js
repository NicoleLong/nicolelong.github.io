/** 
 * Part 1
 * 
 * In this file, we're going to practice 
 * creating and accessing data structues.
 * 
 * See the README for detailed instructions, 
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
 var animal = {};
 animal.species = 'cow';
 animal['name'] = 'Mike';
 animal['noises'] = [];
 console.log(animal);
 


//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var noises = [];
noises = ['moo'];
noises.push('ouch');
noises.unshift('hey');
noises[-1] = 'rawr';
console.log(noises.length);
console.log(noises[-1]);
console.log(noises);

//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
animal['noises'] = noises;
animal.noises.push('Meow');
console.log (animal);

/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

/* ******************************************************************* 
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself 
 * a rest when you can! Grab a drink and have a think! 
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animals = [];
animals.push(animal);
console.log(animals);

var duck = { species: 'duck', name: 'Jerome', noises: ['quack','honk', 'sneeze', 'woosh']};
animals.push(duck);
console.log(animals);

var frog = { species: 'frog', name: 'Jose', noises: ['ribbit','meow', 'yowza', 'watup']};
animals.push(frog);

var chicken = { species: 'chicken', name: 'Tomas', noises: ['bok','choi', 'later', 'hiya']};
animals.push(chicken);

console.log(animals);
console.log(animals.length);
//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var friends = [];//I chose array because I only need a list of names, not keys paired with values.
var getRandom = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
friends.push(animals[getRandom(0, 3)].name);

console.log(friends);

frog.friends = friends;
console.log(frog);

/** 
 * Nice work! You're done Part 1. Pat yourself on the back and 
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.animal = animal;
    module.exports.noises = noises;
    module.exports.animals = animals;
    module.exports.friends = friends;
    module.exports.getRandom = getRandom;
}
