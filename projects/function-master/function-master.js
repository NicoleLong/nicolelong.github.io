
function objectValues(object) {
    newArray = [];
    for (key in object){
        newArray.push(object[key]);
} 
    return newArray;
}

function keysToString(object) {
    return Object.keys(object).join (" ");
}

function valuesToString (object){
  var stringValues = Object.values(object);
  var anotherArr = [];
  for (var i = 0; i < stringValues.length; i++)
    if (typeof stringValues[i] === 'string'){
        anotherArr.push(stringValues[i])
    } return anotherArr.join(' ');
};

function arrayOrObject(value){
     if (Array.isArray(value)){
        return "array";
    }    else if (typeof value === 'object') {
        return "object";
    }   return typeof value;
}

function capitalizeWord (string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function capitalizeAllWords(string){
    var stringArr = string.split(" ");
    for (var i = 0; i < stringArr.length; i++){
        stringArr[i] = stringArr[i].charAt(0).toUpperCase() + stringArr[i].substring(1);
    }    return stringArr.join(' ');
}

function welcomeMessage (object){
        return 'Welcome '+ object['name'].charAt(0).toUpperCase() + object['name'].slice(1) +'!';
    }

function profileInfo(object){
    return object['name'].charAt(0).toUpperCase() + object['name'].slice(1) + " is a "+ object['species'].charAt(0).toUpperCase() + object['species'].slice(1);
}

function maybeNoises(object){
    
    if (object.hasOwnProperty('noises') && object.noises.length > 0){
        return object.noises.join(' ');
    } else {
        return 'there are no noises';
    }
}

function hasWord(string, word){
    var manyString = string.split(' ');
    for (var i = 0; i < manyString.length; i++){
        if (word === manyString[i]){
            return true;
        }
    } return false
        
}

function addFriend(name, object){
    object.friends.push(name);
    return object;
}

function isFriend(name, object){
    if (object.hasOwnProperty('friends')){
        for (var i = 0; i < object.friends.length; i++){
            if (object.friends[i] === name){
                return true;
            } 
            
        } 
    } 
    return false;
}

function nonFriends(name, list){
  var nonFriends = [];
  for(var i = 0; i < list.length; i++){
      if (list[i]['name'] !== name) {
        var check = false
        for(var j = 0; j < list[i]['friends'].length; j++){
          if (list[i]['friends'][j] === name){
          check = true;
          }
          }if (check === false){
            nonFriends.push(list[i]['name']);
        }
      }
    }
  return nonFriends;
} 

      
      
      
    
    


function updateObject(object, key, value){
    if (object.hasOwnProperty(key)){
     object[key] = value;
    } else {
         object[key] = value;
    }
    return object;
}
    
    
function removeProperties(object, array){
    for (var i = 0; i < array.length; i++){
        if (object.hasOwnProperty(array[i])) {
                delete object[array[i]];
            }
        } return object;
    }
    

function dedup(data){
    var newArray = [];
    for (var i = 0; i < data.length; i++){
        if (!(newArray.includes(data[i]))){
            newArray.push(data[i]);
        }
    }
    return newArray;
}