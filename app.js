// Exercise 1

const rectangle = {
  width: 15,
  height: 20,
  getSquare: function () { return rectangle.width * rectangle.height },
};

console.log(rectangle.getSquare());

// Exercise 2

const price = {
  price: 10,
  discount: '15%',
  getPrice: function () { return price.price },
  getPriceWithDiscount: function () {
    return price.price * parseInt(price.discount) / 100
  },
};

console.log(price.getPrice());
console.log(price.getPriceWithDiscount());

// Exerсise 3

const heightGrow = {
  height: 15,
  incHeight: function () { return heightGrow.height += 1},
}

console.log(heightGrow.incHeight());

// Exercise 4

const numerator = {
  value: 1,
  double: function () { numerator.value *= 2; return this },
  plusOne: function () { numerator.value += 1; return this },
  minusOne: function () { numerator.value -= 1; return this },
}

numerator.double().plusOne().plusOne().minusOne();
console.log(numerator.value);

// Exercise 5
// Создать объект с розничной ценой и количеством продуктов. Этот
// объект должен содержать метод для получения общей стоимости
// всех товаров (цена * количество продуктов)

const totCost = {
  price: 25,
  number: 1000,
  gCost: function () { return totCost.price * totCost.number},
}

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
