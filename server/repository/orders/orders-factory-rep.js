import OrdersDaoFactory from "../../dao/orders/orders-dao-factory.js";
import OrdersRep from "../../repository/orders/orders-rep.js";
import OrdersModel from "../../models/orders-model.js";

const ordersDAO = OrdersDaoFactory.getDao();
const ordersRep = new OrdersRep(ordersDAO, OrdersModel);

export default class OrdersRepoFactory {
    static getRepo() {
        return ordersRep;
    }
}
