/*
var square = function(x) {
	return x*x;
}

console.log(square(10));
*/

/*
function power(base, exp){
	if(exp == 0)
		return 1;
	else return base * power(base, exp - 1);
}

console.log(power(2,3));
*/

/*
// Function to find the min value of two arguements
function min(x, y){
	if(x < y)
		console.log(x);
	else
		console.log(y);
}
console.log(min(2,3));
*/

/*
// Recursive function to test for evenness by subtracting 2 
// Assumes 0 is even & 1 is odd.
function isEven(number){
	if(number == 0)
		return true;
	else if (number < 0)
      	return false;
  	else
      	return isEven(number - 2)
}
*/

/*
// Function to count number of occurrences of a given character in a string
// Will use an index counter to run through all characters of string
// If character at index i matches the given char increase result by 1
function countChars(string, target){
	var result = 0;
	for(var i = 0; i < string.length; i++){
		if(string.charAt(i) == target)
			result++;
	}
	return result;
}
*/



		