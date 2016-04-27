/* Function that takes two arguments and creates an array for all numbers between
	and including those two numbers. */
	
function range(x, y, step){
	// Create empty array rangeArr to store all values
	var rangeArr = [];
	if(step == undefined)	
		// Create for loop to make an array of the size y-x
		for(var i = 0; i <= y-x; i++){
			rangeArr[i] = x + i;
		}
	else
		for(var i = 0; (step*i) >= y-x; i++){
			rangeArr[i] = x + (step*i);
		}
	return rangeArr;
}
			
console.log(range(5,10));
console.log(range(4,10,2));

/* Function that takes an array of numbers and returns the sum of all numbers.*/

function sum(array){
	// Create variable to hold sum of integers in array
	var sum = 0;
	// Create for loop to go through array and return values at all indices
	for(var i = 0; i < array.length; i++){
		sum += array[i];
	}
	return sum
}

console.log(sum(range(1,10)));	