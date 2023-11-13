import OrdersService from "../services/orders/orders-factory-service.js";

export async function createOrder(req, res) {
    try {
        const newOrder = await OrdersService.createOrder(
            req.userId,
            req.userEmail
        );
        res.status(201).json(newOrder);
    } catch (error) {
        res.status(400).json(error.message);
    }
}

export async function getOrders(req, res) {
    try {
        const orders = await OrdersService.getOrders(req.userId);
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json(error.message);
    }
}
