
class Hamburger {
    constructor (size, stuffing, toppings) {
        this.size = size;
        this.stuffing = stuffing;
        this.toppings = [];
    }
}

    Hamburger.SIZE_SMALL = 'SIZE_SMALL';

    Hamburger.SIZE_LARGE = 'SIZE_LARGE';

    Hamburger.SIZES = {
        [Hamburger.SIZE_SMALL]: {
          price: 30,
          calories: 50,
        },
        [Hamburger.SIZE_LARGE]: {
            price: 50,
            calories: 100,
          },
      };

    Hamburger.STUFFING_CHEESE = 'STUFFING_CHEESE';
    Hamburger.STUFFING_SALAD = 'STUFFING_SALAD';
    Hamburger.STUFFING_MEAT = 'STUFFING_MEAT'

    Hamburger.STUFFINGS = {
        [Hamburger.STUFFING_CHEESE]: {
        price: 15,
        calories: 20,
        },
        [Hamburger.STUFFING_SALAD]: {
            price: 20,
            calories: 5,
        },
        [Hamburger.STUFFING_MEAT]: {
            price: 35,
            calories: 15,
        },
    };

    Hamburger.TOPPING_SPICE = 'TOPPING_SPICE';
    Hamburger.TOPPING_SAUCE = 'TOPPING_SAUCE';

    Hamburger.TOPPINGS = {
        [Hamburger.TOPPING_SPICE]: {
            price: 10,
            calories: 0,
        },
        [Hamburger.TOPPING_SAUCE]: {
            price: 15,
            calories: 5,
        },
    };

Hamburger.prototype.addTopping = function (topping) {
    this.toppings.push(topping);
};
    
Hamburger.prototype.removeTopping = function (topping) {
    this.toppings.splice(this.toppings.indexOf(topping), 1);
};
    
Hamburger.prototype.getSize = function() {
    return this.size;
};

Hamburger.prototype.getSizePrice = function() {
    return (Hamburger.SIZES[hamburger.getSize()]['price']);
};

Hamburger.prototype.getSizeCalories = function() {
    return (Hamburger.SIZES[hamburger.getSize()]['calories']);
};

Hamburger.prototype.getStuffing = function() {
    return this.stuffing;
};

Hamburger.prototype.getStuffingPrice = function() {
    return (Hamburger.STUFFINGS[hamburger.getStuffing()]['price']);
};

Hamburger.prototype.getStuffingCalories = function() {
    return (Hamburger.STUFFINGS[hamburger.getStuffing()]['calories']);
};

Hamburger.prototype.getToppings = function() {
    return this.toppings;
};

Hamburger.prototype.getToppingsPrice = function() {
    let toppingPrice = 0;
    for (index in this.toppings) {
        toppingPrice = toppingPrice + Hamburger.TOPPINGS[this.toppings[index]]['price'];
    };
    return toppingPrice;
};

Hamburger.prototype.getToppingsCalories = function() {
    let toppingCalories = 0;
    for (index in this.toppings) {
        toppingCalories = toppingCalories + Hamburger.TOPPINGS[this.toppings[index]]['calories'];
    };
    return toppingCalories;
};

Hamburger.prototype.calculatePrice = function () {
    if (hamburger.getToppings().length > 0) {
        return (hamburger.getSizePrice() + hamburger.getStuffingPrice() + hamburger.getToppingsPrice());
    } else {
        return (hamburger.getSizePrice() + hamburger.getStuffingPrice());
    };
};

Hamburger.prototype.calculateCalories = function () {
    if (hamburger.getToppings().length > 0) {
        return hamburger.getSizeCalories() + hamburger.getStuffingCalories() + hamburger.getToppingsCalories();
    }
    return hamburger.getSizeCalories() + hamburger.getStuffingCalories();
};

const hamburger = new Hamburger(
    Hamburger.SIZE_SMALL, 
    Hamburger.STUFFING_CHEESE,
);


hamburger.addTopping(Hamburger.TOPPING_SPICE);

console.log("Calories: ", hamburger.calculateCalories());
console.log("Price: ", hamburger.calculatePrice());

hamburger.addTopping(Hamburger.TOPPING_SAUCE);
console.log("Price with sauce: ", hamburger.calculatePrice());

console.log("Is hamburger large: ", hamburger.getSize() === Hamburger.SIZE_LARGE);

hamburger.removeTopping(Hamburger.TOPPING_SAUCE);

console.log("Hamburger has %d toppings", hamburger.getToppings().length); 