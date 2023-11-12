import ProductsService from "../services/products/products-factory-service.js";

export async function createProduct(req, res) {
    try {
        const product = await ProductsService.createProduct(req.body);
        res.status(201).json(product);
    } catch (e) {
        res.status(400).json(e.message);
    }
}

export async function getProducts(req, res) {
    try {
        const products = await ProductsService.getProducts();
        res.status(200).json(products);
    } catch (e) {
        res.status(404).json(e.message);
    }
}

export async function getProduct(req, res) {
    const { id } = req.params;
    try {
        const product = await ProductsService.getProduct(id);
        res.status(200).json(product);
    } catch (e) {
        res.status(404).json(e.message);
    }
}

export async function updateProduct(req, res) {
    const { id } = req.params;
    const newData = req.body;
    try {
        const updatedProduct = await ProductsService.updateProduct(id, newData);
        res.status(200).json(updatedProduct);
    } catch (e) {
        res.status(404).json(e.message);
    }
}

export async function deleteProduct(req, res) {
    const { id } = req.params;
    try {
        await ProductsService.deleteProduct(id);
        res.status(200).json(`Success: Product deleted`);
    } catch (e) {
        res.status(404).json(e.message);
    }
}
