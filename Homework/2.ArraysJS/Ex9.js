let array =  [1, 'a', 2, null, 3, undefined, 4, {}, 5, 6, `word`, 7, 8, false, 9, 100];

console.log(array);
function filter(){
	return array.filter(arr => typeof(arr) === "number");
}

console.log(filter());