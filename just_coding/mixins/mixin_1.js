const g1 = {};
const g2 = {};
const g3 = { area: 300 };

g2.area = 200;

//* Mixin as a function
const mixinCalculateCost = obj => {
	// "Домешали" свойство
	obj.area = obj.area || 0;
	// Домешали метод по расчету стоимости площади
	obj.calculateCost = function (price) {
		return this.area * price;
	}
}

mixinCalculateCost(g1);

[g1, g2, g3].forEach(mixinCalculateCost);

//* Интересный кейс примеси с таймером (очевидно, что
//* лучше так не делать);
//* Теперь у таймера есть поле "площадь",
//* a также его стоимость

const t1 = setTimeout(() => {
	console.log('Hello from timer');
}, 1000);

mixinCalculateCost(t1);
t1.area = 10;
