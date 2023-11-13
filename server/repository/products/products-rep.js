import { asDto } from "../../dto/products-dto.js";

export default class ProductsRep {
    #dao;
    #model;

    constructor(dao, productModel) {
        this.#dao = dao;
        this.#model = productModel;
    }

    async create(productData) {
        const newProduct = new this.#model(productData);
        const createdProduct = await this.#dao.create(newProduct.dto);
        return asDto(createdProduct);
    }

    async getAll() {
        const products = await this.#dao.getAll();
        return asDto(products);
    }

    async getById(idProduct) {
        const productFound = await this.#dao.getById(idProduct);
        if (!productFound) {
            throw new Error("Product doesn't exist.");
        }
        return asDto(productFound);
    }

    async update(id, newData) {
        const newProduct = new this.#model({ id, ...newData });
        const updatedProduct = await this.#dao.update(id, newProduct.dto);
        return asDto(updatedProduct);
    }

    async delete(id) {
        return await this.#dao.delete(id);
    }
}
