// This is the proper way to start a javascript library
(function() {

// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

// This allows us to use our "_" anywhere. In a web browser, properties of window
// are available everywhere without having to type "window."
/* global _ */
window._ = {};

/**
* START OF OUR LIBRARY!
* Implement each function below it's instructions
*/

/** _.identity()
* Arguments:
*   1) Anything
* Objectives:
*   1) Returns <anything> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/
_.identity = function(value){
    return value;
};

/** _.typeOf()
* Arguments:
*   1) Anything
* Objectives:
*   1) Return the type of <anything> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/

_.typeOf = function (value) {
    if (Array.isArray(value)) return 'array';
    if (value instanceof Date) return 'Date';
    if (value === null) return 'null';
    return typeof value;
};


/** _.first()
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Gotchas:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first(["a","b","c"], 1) -> "a"
*   _.first(["a","b","c"], 2) -> ["a", "b"]
*   _.first(["a", "b", "c"], "ponies") -> ["a","b","c"]
*/
_.first = function(array, n){
    if(!Array.isArray(array) || n < 0) return  [];
    if(n === undefined || typeof n !== 'number') return array[0];
    return array.slice(0, n);
};

/** _.last()
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Gotchas:
*   1) What if <nubmer> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last(["a","b","c"], 2) -> ["b","c"]
*   _.last(["a", "b", "c"], "ponies") -> ["a","b","c"]
*/
_.last = function(array, n){
    if(!Array.isArray(array) || n < 0) return [];// test if array
    if(n === undefined || isNaN(n)) return array[array.length - 1];//if n is undefined or NAN, return the last element in array
    return array.slice(-n);//otherwise return last n 
};

/** _.each()
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/
_.each = function (collection, action){
    // if collection is array call function to loop through the array and return the element, index and array
        if(Array.isArray(collection)){
            for (var i = 0; i < collection.length; i++){
                action(collection[i], i, collection);//giving the action as much information as you can, and this is standard format.
            }
        
        } else {
        //if collection is an object, call function using for in loop for iterate through each property and return the property's value, key and the object
            for (var key in collection){
                action(collection[key], key, collection);
            } 
        }
    };
    
/** _.indexOf()
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Gotchas:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/

_.indexOf = function(array, value){
 // create a for loop, return index of array where value first occurs
 //otherwise return -1 if value isn't in the array
     for (var i = 0; i < array.length; i++){
         if (value === array[i]) {
             return i;
         } 
    } return -1;
};


/** _.filter()
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Gotchas:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/
_.filter = function (collection, test){
    //create an output array//
    //loop using each,design a function passed to each//
    //> the function must run the test, inspect the result,
    //> of the test, determine if the value has passed the test//
    // if value passed test, push to output array to filtered//
    //return the array
    const filtered = [];
    _.each(collection, function(value, pos, collection) {
        //execute the test, based on the result, push passed values  
        if(test(value, pos, collection)) filtered.push(value);
    });
    return filtered;
}

/** _.reject()
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter(), you must use _.filter() in your implementation
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/
_.reject = function (collection, test){
    //create an output array
    //uses _.filter to loop through the collection, which uses _.each, and has already designed a function to pass to each//
    //the function must run the test and inspect the the result of the test, determine if the value has not passed
    // if value has not passed the test, push output array to rejects
        const rejects = [];
        _.filter(collection, function(value, pos, collection) {
            //execute the test, based on the result, push passed values to rejects
            if(!test(value, pos, collection)) rejects.push(value);
        });
        return rejects;
    };

/** _.partition()
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Gotchas:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/
_.partition = function(array, test){
    //create an output array to hold subarrays of filtered(returned truthy on _.each) and rejects (returned falsey on _.filter)//
    //call on filter(_.each()) to test for truthy values in array, then push truthy values into filtered array,
    //call on rejects(_.filter()) to test for falsey values in array, then push falsey values into rejects array
    //return partition array
    
    const filtered = [];
    const rejects = [];
    const partition = [filtered, rejects];
    
    _.each(array, function(value, pos, collection) {
        //execute the test, based on the result, push passed values  
        if(test(value, pos, collection)){
          filtered.push(value);  
        }
    });
    
    _.filter(array, function(value, pos, collection) {
            //execute the test, based on the result, push passed values to rejects
            if(!test(value, pos, collection)){
               rejects.push(value);  
            } 
    });
    
    return partition;     
    };
    
    


/** _.unique()
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/
// _.unique = function(array){
//create a new empty array
//use each to loop through the array and a function to return the value, position and collection, which is an array
//create an if statement which checks if the value is euqal to the position, and if that is true, push the value into the new array
_.unique = function(array){
  const uniq = [];
  _.each(array, function(value, pos, collection){
    if(_.indexOf(array, value) === pos){
      uniq.push(value)}
  }); return uniq;
};            

/** _.map()
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing 
*   the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/
    //create a new array for return values
    //use _.each to determine if collection is an array or an object and loop over collection
    //push the return values after they have been tested into a new array
    //return the array
_.map = function(collection, test){
    const mapped = [];
    _.each(collection, function(value, pos, collection){
        mapped.push(test(value, pos, collection)) 
    });
    return mapped;
};

/** _.pluck()
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/
// use map which uses each to loop over the array of objects, map returns the value of the property at each element in the array and builds a new array from the returned values

_.pluck = function(array, property){
    return _.map(array, function(element) {
        return element[property];
    });
};

/** _.contains()
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Gotchas:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/
//set variable to false in case no value is given
//call _.each to iterate over the array
//if the value in the array is equal to the value argument, change answer variable to true
// we are only returning true if the values match, otherwise we just return false. 
// the second expression is just a placeholder since our default return is false.
_.contains = function(arr, val) {
    var answer = false;
    _.each(arr, function(value) {
        value === val ? answer = true : false; 
    });
    return answer;
};
 
/** _.every()
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Gotchas:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/
//use _.each to call function on each collection
//if return evaluates to true, return true
//if one is false, return false
//if no function, return true if all the elements are truthy, otherwise false
_.every = function(collection, test){
    var answer = true;
   if (typeof (test) === 'function'){
        _.each(collection, function(element, pos, collection){
           if(test(element) === false) {
               answer = false;
           }
        });
    } else {
        _.each(collection, function(element, pos, collection){
            if(element){
               answer = true;
            } else answer = false;
        });
   }    
};


/** _.some()
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Gotchas:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/


/** _.reduce()
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed>
*   5) After the last iteration, return the return value of the final <function> call
* Gotchas:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/
//
// _.reduce = function(array, combine, start){
    
// }

/** _.extend()
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/


// This is the proper way to end a javascript library
}());
