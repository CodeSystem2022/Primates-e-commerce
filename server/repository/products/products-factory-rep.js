import ProductsDaoFactory from "../../dao/products/dao-factory.js";
import ProductsRep from "../../repository/products/products-rep.js";
import ProductModel from "../../models/products-model.js";

const productsDAO = ProductsDaoFactory.getDao();
const productsRep = new ProductsRep(productsDAO, ProductModel);

export default class ProductsRepoFactory {
    static getRepo() {
        return productsRep;
    }
}
