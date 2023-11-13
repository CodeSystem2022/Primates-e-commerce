import UsersDaoFactory from "../../dao/users/users-dao-factory.js";
import UsersRep from "../../repository/users/users-rep.js";
import UsersModel from "../../models/users-model.js";

const usersDAO = UsersDaoFactory.getDao();
const usersRep = new UsersRep(usersDAO, UsersModel);

export default class UsersRepoFactory {
    static getRepo() {
        return usersRep;
    }
}
