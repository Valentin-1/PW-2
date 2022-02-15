let person = {
	name: 'Person',
		age: 123,
		salary: 1542.33,
		contacts: {
			phone: '112',
			email: 'email@domain.com'
	},
	address: 'Moldova',


	get nameUser(){
		this.name = 'Ion';
		return this.name;
	},
	get ageUser(){
		age = 22;
		return this.age = age;
	},
	get salaryUser(){
		salary = 2539.55;
		return this.salary = salary;
	},
	get contactsUser(){
		phoneconNew = '+3736946416';
		emailNew = 'email@user.com';
		this.contacts.phone = phoneconNew;
		this.contacts.email = emailNew;
	},
	get addressUser(){
		address = 'Basarabia';
		return this.address = address;
	}
};
console.log(person);