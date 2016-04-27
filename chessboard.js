/* Create two loops for both the rows and columns
	First loop is for number of rows, second one is for horizontal string
	Two counter variables to make sure both loops are bounded by size var */

var chessboard = "";
var size = 8;
for(var counterCol = 0; counterCol < size; counterCol++){
	for(var counterRow = 0; counterRow < size; counterRow++){
		if((counterRow + counterCol) % 2 == 0)
			chessboard += " ";
		else
			chessboard += "#";
	}
	chessboard += "\n";
}

console.log(chessboard);