import OrdersService from "./orders-service.js";
import OrdersRepoFactory from "../../repository/orders/orders-factory-rep.js";
import CartsService from "../carts/carts-factory-service.js";

const ordersRep = OrdersRepoFactory.getRepo();

const ordersService = new OrdersService(ordersRep, CartsService);

export default ordersService;
