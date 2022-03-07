//! Привязка с помощью bind
// class Person {
// 	constructor(name, age) {
// 		this.name = name;
// 		this.age = age;
// 		// this.getAge = this.getAge.bind(this);
// 	}

// 	getAge() {
// 		return this.age;
// 	}

// 	getName() {
// 		return this.name;
// 	}
// }

// const person1 = new Person('artem', 19);
// console.log(person1.age)
// console.log(person1.getAge());

// const thief = person1.getAge;
// console.log(thief());

//! Привязка с помощью стрелочной функции
class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	getAge = () => {
		return this.age;
	}

	getName() {
		return this.name;
	}
}

const person1 = new Person('artem', 19);
console.log(person1);
// console.log(person1.age)
// console.log(person1.getAge());

// const thief = person1.getAge;
// console.log(thief());


// //! Приватные статические методы и приватные свойства
// class Person {

// 	static# race = 'homosapiens';

// 	static go() {
// 		return this.#getRace();
// 	}
// 	// Смысл приватного статического метода в том, чтобы нельзя было
// 	// вызывать его снаружи, а чтобы можно было взаимодействовать с ним
// 	// только внутри класса уже другими методами

// 	static# getRace() {
// 		return this.#race;
// 	}

// 	constructor(name, age) {
// 		this.name = name;
// 		this.age = age;
// 	}

// 	getAge = () => {
// 		return this.age;
// 	}

// 	getName() {
// 		return this.name;
// 	}
// }

// const person1 = new Person('artem', 19);
// console.log(typeof person1)
// console.log(person1.age)
// console.log(person1.getAge());
// console.log(Person.go());