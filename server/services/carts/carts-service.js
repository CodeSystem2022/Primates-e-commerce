export default class CartsService {
    #rep;
    #prodService;
    constructor(repo, prodService) {
        this.#rep = repo;
        this.#prodService = prodService;
    }
    async createCart(userId) {
        const cart = { cartId: userId, products: [] };
        const newCart = await this.#rep.createCart(cart);
        return newCart;
    }
    async getCartProducts(userId) {
        const cart = await this.#rep.getCart(userId);
        return cart;
    }
    async addProductToCart(cartId, { productId }) {
        try {
            const productCheck = await this.#prodService.getProduct(productId);
            const updatedCart = await this.#rep.addProductToCart(
                cartId,
                productCheck
            );
            return updatedCart;
        } catch (error) {
            throw new Error("Error: Cannot add a non listed product.");
        }
    }
    async deleteProductFromCart(cartId, productId) {
        const cart = await this.#rep.getCart(cartId);
        const productCheck = cart.products.filter(
            (product) => product.productId === productId
        );
        if (!productCheck.length) {
            throw new Error(
                "Error: Product hasn't been added to cart or doesn't exist."
            );
        } else {
            const updatedCart = await this.#rep.deleteProductFromCart(
                cartId,
                productId
            );
            return updatedCart;
        }
    }
    async clearCart(cartId) {
        const cart = { cartId: cartId, products: [] };
        const updatedCart = await this.#rep.clearCart(cartId, cart);
        return updatedCart;
    }
}
