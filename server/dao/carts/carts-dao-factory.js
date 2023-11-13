import CartsDAO from "./carts-dao-mongo.js";

const opcion = process.argv[2] || "Mongo";

let dao;

switch (opcion) {
    default:
        dao = new CartsDAO();
}

export default class CartsDaoFactory {
    static getDao() {
        return dao;
    }
}
