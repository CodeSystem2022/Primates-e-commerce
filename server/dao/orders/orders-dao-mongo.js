import Orders from "../../database/orders-schema.js";

export default class OrdersDAO {
    constructor() {}
    async createOrder(order) {
        const newOrder = new Orders({ _id: order.orderId, ...order });
        try {
            await newOrder.save();
            return newOrder;
        } catch (error) {
            console.log(error);
        }
    }
    async getOrders(userId) {
        try {
            const orders = await Orders.find({ userId });
            return orders;
        } catch (error) {
            console.log(error);
        }
    }
    async deleteFailedOrder(orderId) {
        try {
            await Orders.findOneAndDelete({ orderId });
            return true;
        } catch (error) {
            console.log(error);
        }
    }
}
