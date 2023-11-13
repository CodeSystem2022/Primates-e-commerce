import { asDto } from "../../dto/orders-dto.js";
export default class CartsRep {
    #dao;
    #model;
    constructor(dao, model) {
        this.#dao = dao;
        this.#model = model;
    }
    async createOrder(order) {
        const newOrder = new this.#model(order);

        const result = await this.#dao.createOrder(newOrder.dto);
        return asDto(result);
    }
    async getOrders(userId) {
        const result = await this.#dao.getOrders(userId);
        return asDto(result);
    }
    async deleteFailedOrder(orderId) {
        const result = await this.#dao.getOrders(orderId);
        return result;
    }
}
