// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  // helper function to check if object is empty, should evaluate to a boolean

  let checkIfEmpty = function (obj) {
 	return Object.keys(obj).length === 0
 }


  // solve for the one answer cases
  let string = "";

  if (typeof obj === "boolean" || typeof obj === "number") {
  	return string += obj 
  } else if (typeof obj === "null") {
  	return "null"
  } else if ( typeof obj === "undefined") {
  	return "undefined"
  } else if (typeof obj === 'string') {
  	return obj;
  }

  // create circumstances for is it  an object and if it is an array like object
	 if (Array.isArray(obj)) {
	 	return '[' + obj.map(function(value) {
	 	
	 		return stringifyJSON(value)
	 	
	 	}) + ']' ;
  
  }

  
let count = Object.keys(obj).length;

for ( let keys in obj) {
	if (typeof obj[keys] === 'undefined') {
		count -= 1
	} else if (count > 1) {
		string += stringifyJSON(keys) + ':' + stringifyJSON(obj[keys]) +', '
		count -= 1
	} else {
		string += stringifyJSON(keys) + ':' + stringifyJSON(obj[keys])
	}
}
 return '{' + string + '}'	

};
