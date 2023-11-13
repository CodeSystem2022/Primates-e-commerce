import { asDto } from "../../dto/users-dto.js";

export default class UsersRep {
    #dao;
    #model;

    constructor(dao, model) {
        this.#dao = dao;
        this.#model = model;
    }

    async findUser(email) {
        const existingUser = await this.#dao.find(email);
        if (existingUser === null) {
            return false;
        } else {
            const user = new this.#model(existingUser);
            return user;
        }
    }

    async registerUser(userData) {
        const newUser = new this.#model(userData);

        const result = await this.#dao.registerUser(newUser.dto);
        return asDto(result);
    }

    async deleteFailedUser(userId) {
        const deleteUser = await this.#dao.deleteFailedUser(userId);
        return deleteUser;
    }
}
