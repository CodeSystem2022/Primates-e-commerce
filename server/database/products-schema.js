import mongoose from "mongoose";

const productsSchema = mongoose.Schema({
    _id: { type: String },
    productId: String,
    name: String,
    description: String,
    image: String,
    price: Number,
});

const Products = mongoose.model("Product", productsSchema);

export default Products;
