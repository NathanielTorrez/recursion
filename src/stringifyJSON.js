// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here


  // solve for the one answer cases
  var string = "";

  if (typeof obj === "boolean" || typeof obj === "number") {
  	return string += obj 
  } else if (typeof obj === "null") {
  	return "null"
  } else if ( typeof obj === "undefined") {
  	return "undefined"{
  } else if (typeof obj === 'string') {
  	return obj;
  }

  // create circumstances for is it  an object and if it is an array like object

  if (typeof obj === 'object' and Array.isArray(obj) === false) {
   var opener = '{';
   var closer = '}'
  } else if (Array.isArray) {
  	var opener = '['
  	var closer = ']'
  }

// find out of the object has any elements in it to know when to end
// maybe use a for loop or a function to iterate over the contents



};
