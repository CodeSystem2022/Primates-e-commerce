import CartsDaoFactory from "../../dao/carts/carts-dao-factory.js";
import CartsRep from "../../repository/carts/carts-rep.js";
import CartsModel from "../../models/carts-model.js";

const cartsDAO = CartsDaoFactory.getDao();
const cartsRep = new CartsRep(cartsDAO, CartsModel);

export default class CartsRepoFactory {
    static getRepo() {
        return cartsRep;
    }
}
