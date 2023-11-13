import mongoose from "mongoose";

const cartsSchema = mongoose.Schema({
    _id: { type: String },
    cartId: String,
    products: Array,
});

const Carts = mongoose.model("Cart", cartsSchema);

export default Carts;
