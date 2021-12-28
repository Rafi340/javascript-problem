function largestNumber(numbers){
	var large= numbers[0];
	for(var i=1 ; i<numbers.length;i++){
		var element =numbers[i];
		if( element > large) {
			large = element;
		}
		
	}
	return large;
}
var numbers=[10, 53, 9, 154];
var output= largestNumber(numbers)
console.log(output);