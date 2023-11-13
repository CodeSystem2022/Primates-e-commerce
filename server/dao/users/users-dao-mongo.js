import Users from "../../database/users-schema.js";

export default class UsersDAO {
    constructor() {}

    async find(email) {
        const existingUser = await Users.findOne({ email });
        return existingUser;
    }

    async registerUser(user) {
        const newUser = new Users({ _id: user.userId, ...user });

        try {
            await newUser.save();
            return newUser;
        } catch (error) {
            console.log(error);
        }
    }
    async deleteFailedUser(userId) {
        try {
            await Users.findByIdAndDelete({ userId });
            return true;
        } catch (error) {
            console.log(error);
        }
    }
}
