import CartsService from "./carts-service.js";
import CartsRepoFactory from "../../repository/carts/carts-factory-rep.js";
import productService from "../products/products-factory-service.js";

const cartsRep = CartsRepoFactory.getRepo();

const cartsService = new CartsService(cartsRep, productService);

export default cartsService;
