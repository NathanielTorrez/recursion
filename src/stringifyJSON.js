// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  // solve for the one answer cases
  var resultStr = "";

  if (typeof obj === "boolean" || typeof obj === "number" ||  obj === null) {
  	return resultStr += obj;
  } else if ( typeof obj === 'function') {
  	return null 
  } else if ( typeof obj === "undefined"){
  	return 'undefined'
  } else if (typeof obj === 'string') {
  	return '"' + obj + '"';
  }

  // create circumstances for is it  an object and if it is an array like object
	 if (Array.isArray(obj)) {
	// map goes over and runs each element into our one answer cases

	 	return '[' + obj.map(function(value) {
	 	
	 		return stringifyJSON(value)
	 	
	 	}) + ']' ;
  }

  // the only option left is for it to be an obj

  // create a count to apply correct extras to the string
var countKeys = Object.keys(obj);
var count = countKeys.length

for ( var key in obj) {
	if (typeof obj[key] === 'undefined' || typeof obj[key] === 'function') {
		count -= 1
	} else if (count > 1) {
		resultStr += stringifyJSON(key) + ':' + stringifyJSON(obj[key]) +',';
		count -= 1
	} else {
		resultStr += stringifyJSON(key) + ':' + stringifyJSON(obj[key])
	}
}
 return '{' + resultStr + '}'	

};
