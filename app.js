// Exercise 1

const rectangle = {
	width: 15,
	height: 20,
	getSquare: function() {
		return rectangle.width * rectangle.height;
	}
};

console.log(rectangle.getSquare());

// Exercise 2

const price = {
	price: 10,
	discount: '15%',
	getPrice: function() {
		return price.price;
	},
	getPriceWithDiscount: function() {
		return price.price * parseInt(price.discount) / 100;
	}
};

console.log(price.getPrice());
console.log(price.getPriceWithDiscount());

// Exerсise 3

const heightGrow = {
	height: 15,
	incHeight: function() {
		return (heightGrow.height += 1);
	}
};

console.log(heightGrow.incHeight());

// Exercise 4

const numerator = {
	value: 1,
	double: function() {
		numerator.value *= 2;
		return this;
	},
	plusOne: function() {
		numerator.value += 1;
		return this;
	},
	minusOne: function() {
		numerator.value -= 1;
		return this;
	}
};

numerator.double().plusOne().plusOne().minusOne();
console.log(numerator.value);

// Exercise 5
// Создать объект с розничной ценой и количеством продуктов. Этот
// объект должен содержать метод для получения общей стоимости
// всех товаров (цена * количество продуктов)

const totCost = {
	price: 25,
	number: 1000,
	gCost: function() {
		return totCost.price * totCost.number;
	}
};

console.log(totCost.gCost());

// Exercise 6
// Создать объект из предыдущей задачи. Создать второй объект,
// который описывает количество деталей и цену за одну деталь. Для
// второго объекта нужно узнать общую стоимость всех деталей, но
// нельзя создавать новые функции и методы. Для этого
// “позаимствуйте” метод из предыдущего объекта.

const totalCost = {
	itemPrice: 25,
	item: 1000,
	getCost: function() {
		return this.itemPrice * this.item;
	}
};

const totalPrice = {
	item: 10000,
	itemPrice: 15
};

console.log(totalCost.getCost.call(totalPrice));

//Exercise 7

let sizes = { width: 5, height: 10 },
	getSquare = function() {
		return this.width * this.height;
	};

console.log(getSquare.call(sizes));

//Exersice 8

let element = {
	height: 25,
	getHeight: function() {
		return this.height;
	}
};

let getElementHeight = element.getHeight;
console.log(getElementHeight.call(element));

//Перебирающие методы
// Exercise 1

let numbers = [ 1, 2, 3, 5, 8, 9, 10 ];

let newArr = numbers.map(function(item) {
	for (let i = 0; i < numbers.length; i++) {
		if (item % 2 === 0) {
			return { digit: item, odd: false };
		} else {
			return { digit: item, odd: true };
		}
	}
});

console.log(newArr);

//Exercise 2
// Проверить, содержит ли массив [12, 4, 50, 1, 0, 18, 40]
//элементы, равные нулю. Если да - вернуть false.

// alert([12, 4, 50, 1, 0, 18, 40].every(elem => elem !== 0));

//Exercise 3
// Проверить, содержит ли массив ['yes', 'hello', 'no', 'easycode', 'what'] хотя бы одно слово длиной больше 3х букв. Если да - вернуть true

// alert([ 'yes', 'hello', 'no', 'easycode', 'what' ].some((elem) => elem.length > 3));

//Exercise 4

const letters = [
	{ char: 'a', index: 12 },
	{ char: 'w', index: 8 },
	{ char: 'Y', index: 10 },
	{ char: 'p', index: 3 },
	{ char: 'p', index: 2 },
	{ char: 'N', index: 6 },
	{ char: ' ', index: 5 },
	{ char: 'y', index: 4 },
	{ char: 'r', index: 13 },
	{ char: 'H', index: 0 },
	{ char: 'e', index: 11 },
	{ char: 'a', index: 1 },
	{ char: ' ', index: 9 },
	{ char: '!', index: 14 },
	{ char: 'e', index: 7 }
];

letters.sort(function(a, b) {
	return a.index - b.index;
});

let newLetters = letters.reduce(function(str, current) {
	return str.concat(current.char);
}, '');

console.log(newLetters);

//Exercise 5
// Отсортируйте массив массивов так, чтобы вначале располагались наименьшие массивы
// (размер массива определяется его длиной):
// [  [14, 45],  [1],  ['a', 'c', 'd']  ] → [ [1], [14, 45], ['a', 'c', 'd'] ]

let bigArray = [ [ 14, 45 ], [ 1 ], [ 'a', 'c', 'd' ] ];

bigArray = bigArray.sort(function(prev, next) {
	return prev.length - next.length;
});

// console.log(bigArray);

//Exercise 6

let coresArr = [
	{ cpu: 'intel', info: { cores: 2, сache: 3 } },
	{ cpu: 'intel', info: { cores: 4, сache: 4 } },
	{ cpu: 'amd', info: { cores: 1, сache: 1 } },
	{ cpu: 'intel', info: { cores: 3, сache: 2 } },
	{ cpu: 'amd', info: { cores: 4, сache: 2 } }
];

coresArr.sort(function(prev, next) {
	return prev.info.cores - next.info.cores;
});

// console.log(coresArr);

//Exercise 7

let products = [
	{ title: 'prod1', price: 5.2 },
	{ title: 'prod2', price: 0.18 },
	{ title: 'prod3', price: 15 },
	{ title: 'prod4', price: 25 },
	{ title: 'prod5', price: 18.9 },
	{ title: 'prod6', price: 8 },
	{ title: 'prod7', price: 19 },
	{ title: 'prod8', price: 63 }
];

let filterCollection = (products, a, b) => {
	let newCollection = products.filter(function(element) {
		return element.price >= a && element.price < b;
	});

	newCollection.sort(function(prev, next) {
		return prev.price - next.price;
	});
	// console.log(newCollection);
};

filterCollection(products, 15, 30);
