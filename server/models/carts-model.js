export default class CartsModel {
    #cartId;
    #products;
    constructor({ cartId, products }) {
        this.cartId = cartId;
        this.products = products;
    }
    set cartId(cartId) {
        if (!cartId) {
            throw new Error("Error. Invalid cart id");
        }
        this.#cartId = cartId;
    }
    set products(products) {
        this.#products = products;
    }
    get dto() {
        const cart = Object.freeze({
            cartId: this.#cartId,
            products: this.#products,
        });
        return cart;
    }
}
