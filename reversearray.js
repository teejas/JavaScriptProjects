/* Function to take an array and create a new array with the same values 
	in an inverse order */
	
function reverseArray(array){
	var reversed = [];
	for(var i = 0; i < array.length; i++){
		reversed[i] = array[array.length - 1 - i];
	}
	return reversed;
}

console.log(reverseArray([5,3,4,2]));

/* Function to take an array and reverse its contents in place
	does NOT create a new array */
	
function reverseArrayInPlace(array){
	for(var i = 0; i < (array.length / 2); i++){
		var temp = array[i];
		array[i] = array[array.length - 1 - i];
		array[array.length - 1 - i] = temp;
	}
	return array;
}

console.log(reverseArrayInPlace([5,3,4,2]));