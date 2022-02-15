const weekDays = {
	'Mo': 'Понедельник',
	'Tu': 'Вторник',
	'We': 'Среда',
	'Th': 'Четверг',
	'Fr': 'Пятница',
	'Sa': 'Суббота',
	'Su': 'Воскресенье',
}

function translate(obj){
	let i = 0;
	let days = ['Luni', 'Marti', 'Miercuri', 'Joi', 'Vineri', 'Sambata', 'Duminica'];
	for(let key in obj){
		obj[key] = days[i];
		i++;
	}
}

translate(weekDays);
console.log(weekDays);