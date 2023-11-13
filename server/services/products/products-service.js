import { v4 as uuidv4 } from "uuid";

export default class ProductsService {
    #rep;
    constructor(productsRep) {
        this.#rep = productsRep;
    }

    async createProduct(productData) {
        const id = uuidv4();
        const product = {
            productId: id,
            ...productData,
        };
        const newProduct = await this.#rep.create(product);
        return newProduct;
    }

    async getProducts() {
        const products = await this.#rep.getAll();
        return products;
    }

    async getProduct(id) {
        const productFound = await this.#rep.getById(id);
        return productFound;
    }

    async updateProduct(id, newProduct) {
        const updatedProduct = await this.#rep.update(id, newProduct);
        return updatedProduct;
    }

    async deleteProduct(id) {
        return await this.#rep.delete(id);
    }
}
