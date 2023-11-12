import CartsService from "../services/carts/carts-factory-service.js";

export async function getCartProducts(req, res) {
    try {
        const products = await CartsService.getCartProducts(req.userId);
        res.status(200).json(products);
    } catch (error) {
        res.status(404).json(error.message);
    }
}
export async function addProductToCart(req, res) {
    try {
        const updatedCart = await CartsService.addProductToCart(
            req.userId,
            req.body
        );
        res.status(201).json(updatedCart);
    } catch (error) {
        res.status(500).json(error.message);
    }
}
export async function deleteProductFromCart(req, res) {
    try {
        const updatedCart = await CartsService.deleteProductFromCart(
            req.userId,
            req.params.id
        );
        res.status(200).json(updatedCart);
    } catch (error) {
        res.status(500).json(error.message);
    }
}
