import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcrypt";

export default class UsersService {
    #rep;
    #tokenGen;
    #cartsService;
    constructor(usersRep, tokenGen, cartsService) {
        this.#rep = usersRep;
        this.#tokenGen = tokenGen;
        this.#cartsService = cartsService;
    }

    async register(userData) {
        const savedUser = await this.#rep.findUser(userData.email);

        if (savedUser !== false) {
            throw new Error("User already exists");
        } else {
            const userId = uuidv4();
            const hashedPassword = await bcrypt.hash(userData.password, 12);
            const user = { userId, ...userData, password: hashedPassword };

            const newUser = await this.#rep.registerUser(user);

            const newCart = await this.#cartsService.createCart(user.userId);

            //Check: Si la creación del carrito falla, elimina el usuario de la db para evitar que haya usuario sin carrito y lanza un error.
            if (!newCart) {
                await this.#rep.deleteFailedUser(user.userId);
                throw new Error(
                    "Registration process failed. Please try again."
                );
            }

            const token = this.#tokenGen.generate(
                newUser.email,
                newUser.userId
            );

            return { user: newUser, token };
        }
    }

    async login(email, password, req) {
        const userObtained = await this.#rep.findUser(email);
        if (userObtained === false) {
            throw new Error("User doesn't exist");
        }
        await userObtained.isPasswordCorrect(password);

        const token = this.#tokenGen.generate(
            userObtained.dto.email,
            userObtained.dto.userId
        );

        return { user: userObtained.dto, token };
    }
}
