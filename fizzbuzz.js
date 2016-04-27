/* A for loop that prints a counter from 1 - 100
	An if-statement to 'continue' for all x modulo 3 equal to zero "Fizz"
    An if-statement to 'continue' for all x modulo 5 equal to zero "Buzz"
    An if-statement to 'continue' for all x modulo 3 AND x modulo 5 equal to zero
    "FizzBuzz"
*/
for(var counter = 1; counter <= 100; counter++){
	if(counter % 3 === 0 && counter % 5 === 0){
		console.log("FizzBuzz");
		continue;
	}
	if(counter % 3 === 0){
		console.log("Fizz");
		continue;
	}
	if(counter % 5 === 0){
		console.log("Buzz");
		continue;
	}
	console.log(counter);
}