export default class OrdersModel {
    #orderId;
    #date;
    #userId;
    #products;
    constructor({ orderId, date, userId, products }) {
        this.orderId = orderId;
        this.date = date;
        this.userId = userId;
        this.products = products;
    }
    set orderId(orderId) {
        if (!orderId) {
            throw new Error("Error. Invalid order id");
        }
        this.#orderId = orderId;
    }
    set date(date) {
        this.#date = date;
    }
    set userId(userId) {
        if (!userId) {
            throw new Error("Error. Invalid user id");
        }
        this.#userId = userId;
    }
    set products(products) {
        if (!products.length) {
            throw new Error("Error. Invalid Order data. Must add products.");
        }
        this.#products = products;
    }

    get dto() {
        const order = Object.freeze({
            orderId: this.#orderId,
            date: this.#date,
            userId: this.#userId,
            products: this.#products,
        });
        return order;
    }
}
