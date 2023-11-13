import mongoose from "mongoose";

const ordersSchema = mongoose.Schema({
    _id: { type: String },
    orderId: String,
    date: String,
    userId: String,
    products: Array,
});

const Orders = mongoose.model("Order", ordersSchema);

export default Orders;
