// A for loop that repeats 7 times to print hashtags up to 7 in a string
var hashtag = "";
for(var length = 0; length < 7; length++){
  hashtag = hashtag + "#";
  console.log(hashtag);
}

// An even simpler way of doing the previous function
for(var hashtag = ""; hashtag.length <= 7; hashtag += "#"){
	console.log(hashtag);
}

