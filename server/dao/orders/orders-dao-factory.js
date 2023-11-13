import OrdersDAO from "./orders-dao-mongo.js";

const opcion = process.argv[2] || "Mongo";

let dao;

switch (opcion) {
    default:
        dao = new OrdersDAO();
}

export default class OrdersDaoFactory {
    static getDao() {
        return dao;
    }
}
