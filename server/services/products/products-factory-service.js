import ProductsService from "./products-service.js";
import ProductsRepoFactory from "../../repository/products/products-factory-rep.js";

const productsRep = ProductsRepoFactory.getRepo();

const productService = new ProductsService(productsRep);

export default productService;
