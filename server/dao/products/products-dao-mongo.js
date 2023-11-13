import Products from "../../database/products-schema.js";

export default class ProductsDAO {
    constructor() {}

    async create(product) {
        const newProduct = new Products({ _id: product.productId, ...product });
        try {
            await newProduct.save();
            return newProduct;
        } catch (error) {
            console.log(error);
        }
    }

    async getAll() {
        try {
            const products = await Products.find();
            return products;
        } catch (error) {
            console.log(error);
        }
    }

    async getById(productId) {
        try {
            const productFound = await Products.findById({
                _id: productId,
            });
            return productFound;
        } catch (error) {
            console.log(error);
        }
    }

    async update(id, newData) {
        try {
            const updatedProduct = await Products.findByIdAndUpdate(
                id,
                { ...newData },
                { new: true }
            );
            return updatedProduct;
        } catch (error) {
            console.log(error);
        }
    }

    async delete(id) {
        try {
            await Products.findByIdAndDelete({ _id: id });
            return true;
        } catch (error) {
            console.log(error);
            throw new Error("Error. Product wasn't deleted.");
        }
    }
}
