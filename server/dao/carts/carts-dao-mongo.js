import Carts from "../../database/carts-schema.js";

export default class CartsDAO {
    constructor() {}
    async createCart(cart) {
        const newCart = new Carts({ _id: cart.cartId, ...cart });
        try {
            await newCart.save();
            return true;
        } catch (error) {
            console.log(error);
        }
    }
    async getCart(cartId) {
        try {
            const cartFound = await Carts.findOne({
                cartId: cartId,
            });
            return cartFound;
        } catch (error) {
            console.log(error);
        }
    }
    async addProductToCart(cartId, updatedCartData) {
        try {
            const updatedCart = await Carts.findOneAndUpdate(
                cartId,
                { ...updatedCartData },
                { new: true }
            );
            return updatedCart;
        } catch (error) {
            console.log(error);
        }
    }
    async deleteProductFromCart(cartId, updatedCartData) {
        try {
            const updatedCart = await Carts.findOneAndUpdate(
                cartId,
                { ...updatedCartData },
                { new: true }
            );
            return updatedCart;
        } catch (error) {
            console.log(error);
        }
    }
    async clearCart(cartId, cartData) {
        try {
            const updatedCart = await Carts.findOneAndUpdate(
                cartId,
                { ...cartData },
                { new: true }
            );
            return updatedCart;
        } catch (error) {
            console.log(error);
        }
    }
}
