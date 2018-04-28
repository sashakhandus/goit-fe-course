const products = {
    bread: 10,
    milk: 15,
    apples: 20,
    chicken: 50,
    pork: 80,
    cheese: 60,
    tea: 20,
    candy: 25
};

const order = {
    bread: 2,
    milk: 2,
    apples: 1,
    cheese: 1,
};

function Cashier(name, products) {
    this.name = name;
    this.products = products;
    this.totalPrice = 0;
    this.customerMoney = 0;
    this.changeAmout = 0;
    this.countTotalPrice = function(order) {
        for (const key in order) {
            this.totalPrice = this.totalPrice + order[key] * this.products[key];
        }
        console.log(`totalPrice: ${this.totalPrice}`);
        return this.totalPrice;
    };
    this.getCustomerMoney = function() {
         do {
            this.customerMoney = prompt(`Общая сумма покупок ${this.totalPrice}. Введите ваши деньги:`);
            console.log(this.customerMoney !== null);
            if (this.customerMoney < this.totalPrice && this.customerMoney !== null) {
                console.log(`Вам не хватило денег.`);
            };
         } while (this.customerMoney === null || (this.customerMoney < this.totalPrice) || (Number.isNaN(+this.customerMoney)));
        return this.customerMoney;
    };
    this.countChange = function() {
        this.changeAmout = this.customerMoney - this.totalPrice;
        return this.changeAmout;
    };
    this.resetOnSuccess = function() {
        this.totalPrice = 0;
        this.customerMoney = 0;
        this.changeAmout = 0;
    };
    this.serve = function(order) {
        this.countTotalPrice(order);
        this.getCustomerMoney();
        this.countChange();
        console.log(this.totalPrice);
        if (this.changeAmout >= 0) {
            console.log(`Спасибо за покупку, Ваша сдача ${this.changeAmout}`);
            return `Спасибо за покупку, Ваша сдача ${this.changeAmout}`;
        } else {
            console.log(`Вам не хватило денег`);
            return 'Вам не хватило денег';
        }
    };
}

const cashier = new Cashier('Mango', products);
console.log(order);
console.log(products);

cashier.serve(order);