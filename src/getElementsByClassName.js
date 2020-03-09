// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
	

  // var results = []; // create results variable

  // create a helper function to check if it has a class list and if that contains the className
  
  // var elementSearch = function(element){

  //   if(element.classList && element.classList.contains(className)){
  //       results.push(element); // > this keeps track of the results and serves as the break condition
  //     }

  // create a loop to iterate over all of the child nodes under the parent

  //   for(var i = 0; i < element.childNodes.length; i++){
  //     elementSearch(element.childNodes[i]); // > recursion over the childNodes
  //   }
  // }

  //  elementSearch(document.body);
  //  return results;

  //----------------------------------------------------------------------
  // better solution below

  // create result array
	
	var result = [];

	// The element you are looking at is the body at first but,
	// we are going to want to look at the argument we supply during recursion
	var element = arguments[1] || document.body ;

 	// if it has a classlist and it contains the className then we want to save it
	if (element.classList && element.classList.contains(className)) {
		result.push(element)
	}

	// now we need to go through all the childNodes using a for loop

		for (var i = 0; i < element.childNodes.length; i++) {
			// result is now going to equal the results of running through all nodes and child nodes
			result = result.concat(getElementsByClassName( className, element.childNodes[i]))
		}
	// return results for the answer
	
	return result
};
