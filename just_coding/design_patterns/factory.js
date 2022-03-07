//* Фабричный метод
//* Цель - создание класса, который будет позволять создать объекты на основе исходных данных;
//* Зачем он?
//* Когда нужно создавать множество однотипных объектов (одинаковая структура, но разные данные);

// Класс-фабрика

class ProgrammerFactory {
	create(direction) {
		if (direction === 'Frontend')
			return new Programmer(direction, true, false);
		if (direction === 'Backend')
			return new Programmer(direction, false, true);
	}
};

// Класс-конструктор
class Programmer {
	constructor(direction, reactable, useJava) {
		this.direction = direction;
		this.reactable = reactable;
		this.useJava = useJava;
	}
}

const factory = new ProgrammerFactory();

const fe = factory.create('Frontend');
const be = factory.create('Backend');