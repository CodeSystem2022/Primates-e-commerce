import UsersDAO from "./users-dao-mongo.js";

const opcion = process.argv[2] || "Mongo";

let dao;

switch (opcion) {
    default:
        dao = new UsersDAO();
}

export default class ProductsDaoFactory {
    static getDao() {
        return dao;
    }
}
