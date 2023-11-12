import { asDto } from "../../dto/carts-dto.js";
export default class CartsRep {
    #dao;
    #model;
    constructor(dao, model) {
        this.#dao = dao;
        this.#model = model;
    }
    async createCart(cartData) {
        try {
            const newCart = new this.#model(cartData);

            const result = await this.#dao.createCart(newCart.dto);

            return result;
        } catch (error) {
            console.log(error);
        }
    }
    async getCart(cartId) {
        try {
            const cart = await this.#dao.getCart(cartId);
            return asDto(cart);
        } catch (error) {
            console.log(error);
        }
    }
    async addProductToCart(cartId, product) {
        try {
            const cart = await this.#dao.getCart(cartId);

            //Check: Si no está el producto lo añade completo, sino sólo aumenta la cantidad.

            const prodInCart = cart.products.filter(
                (prod) => prod.name === product.name
            );

            if (!prodInCart.length) {
                cart.products.push({ ...product, cant: 1 });
            } else {
                const i = cart.products.findIndex(
                    (p) => p.productId === product.productId
                );
                const productFound = cart.products[i];
                productFound.cant++;
            }

            const updatedCart = new this.#model(cart);
            const result = await this.#dao.addProductToCart(
                cartId,
                updatedCart.dto
            );
            return asDto(result);
        } catch (error) {
            console.log(error);
        }
    }
    async deleteProductFromCart(cartId, productId) {
        try {
            const oldCart = await this.#dao.getCart(cartId);

            //Check: Si hay más de 1 mismo producto baja la cantidad, sino lo elimina.

            const prodInCart = oldCart.products.filter(
                (prod) => prod.productId === productId
            );

            const i = oldCart.products.findIndex(
                (p) => p.productId === productId
            );

            if (prodInCart[0].cant <= 1) {
                oldCart.products.splice(i, 1);
            } else {
                const productFound = oldCart.products[i];
                productFound.cant--;
            }

            const updatedListCart = new this.#model(oldCart);

            const result = await this.#dao.deleteProductFromCart(
                cartId,
                updatedListCart.dto
            );

            return asDto(result);
        } catch (error) {
            console.log(error);
        }
    }
    async clearCart(cartId, cart) {
        const result = await this.#dao.clearCart(cartId, cart);
        return result;
    }
}
