
class Hamburger {
    constructor (size, stuffing, toppings) {
        this.size = size;
        this.stuffing = stuffing;
        this.toppings = [];
    }

    addTopping (topping) {
        this.toppings.push(topping);
    };
        
    removeTopping (topping) {
        this.toppings.splice(this.toppings.indexOf(topping), 1);
    };
        
    getSize () {
        return this.size;
    };
    
    getSizePrice () {
        return (Hamburger.SIZES[hamburger.getSize()]['price']);
    };
    
    getSizeCalories () {
        return (Hamburger.SIZES[hamburger.getSize()]['calories']);
    };
    
    getStuffing () {
        return this.stuffing;
    };
    
    getStuffingPrice () {
        return (Hamburger.STUFFINGS[hamburger.getStuffing()]['price']);
    };
    
    getStuffingCalories () {
        return (Hamburger.STUFFINGS[hamburger.getStuffing()]['calories']);
    };
    
    getToppings () {
        return this.toppings;
    };
    
    getToppingsPrice () {
        let toppingPrice = 0;
        for (let index in this.toppings) {
            toppingPrice = toppingPrice + Hamburger.TOPPINGS[this.toppings[index]]['price'];
        };
        return toppingPrice;
    };
    
    getToppingsCalories () {
        let toppingCalories = 0;
        for (let index in this.toppings) {
            toppingCalories = toppingCalories + Hamburger.TOPPINGS[this.toppings[index]]['calories'];
        };
        return toppingCalories;
    };
    
    calculatePrice () {
        if (hamburger.getToppings().length > 0) {
            return (hamburger.getSizePrice() + hamburger.getStuffingPrice() + hamburger.getToppingsPrice());
        } else {
            return (hamburger.getSizePrice() + hamburger.getStuffingPrice());
        };
    };
    
    calculateCalories () {
        if (hamburger.getToppings().length > 0) {
            return hamburger.getSizeCalories() + hamburger.getStuffingCalories() + hamburger.getToppingsCalories();
        }
        return hamburger.getSizeCalories() + hamburger.getStuffingCalories();
    };
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


const hamburger = new Hamburger(
    Hamburger.SIZE_SMALL, 
    Hamburger.STUFFING_CHEESE,
);

console.log("Calories: ", hamburger.calculateCalories());
console.log("Price: ", hamburger.calculatePrice());

hamburger.addTopping(Hamburger.TOPPING_SPICE);

console.log("Calories: ", hamburger.calculateCalories());
console.log("Price: ", hamburger.calculatePrice());

hamburger.addTopping(Hamburger.TOPPING_SAUCE);
console.log("Price with sauce: ", hamburger.calculatePrice());

console.log("Calories: ", hamburger.calculateCalories());
console.log("Price: ", hamburger.calculatePrice());

console.log("Is hamburger large: ", hamburger.getSize() === Hamburger.SIZE_LARGE);

hamburger.removeTopping(Hamburger.TOPPING_SAUCE);

console.log("Calories: ", hamburger.calculateCalories());
console.log("Price: ", hamburger.calculatePrice());

console.log("Hamburger has %d toppings", hamburger.getToppings().length); 