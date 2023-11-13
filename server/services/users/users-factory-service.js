import UsersService from "./users-service.js";
import UsersRepoFactory from "../../repository/users/users-factory-rep.js";
import TokenGen from "../../models/token-model.js";
import cartsService from "../carts/carts-factory-service.js";

const usersRep = UsersRepoFactory.getRepo();
const tokenGen = new TokenGen();
const usersService = new UsersService(usersRep, tokenGen, cartsService);

export default usersService;
