import mongoose from "mongoose";

const usersSchema = mongoose.Schema({
    _id: { type: String },
    userId: String,
    email: String,
    password: String,
    name: String,
    lastname: String,
    phone: String,
    image: String,
});

const Users = mongoose.model("User", usersSchema);

export default Users;
