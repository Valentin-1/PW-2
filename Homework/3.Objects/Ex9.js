const weekDays = {
	'Luni': 'Mo',
	'Marti': 'Tu',
	'Miercuri': 'We',
	'Joi': 'Th',
	'Vineri': 'Fr',
	'Simbata': 'Sa',
	'Duminica': 'Su'
};

function revers(obj){
	const rev = {};
	Object.keys(obj).forEach(function(value){
	let key = obj[value];
	rev[key] = value;
	});
	return rev;
}

console.log(revers(weekDays));