import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export default class TokenGen {
    constructor() {}

    generate(userEmail, userId) {
        const token = jwt.sign(
            {
                email: userEmail,
                userId: userId,
            },
            process.env.TOKEN_SS_WORD,
            { expiresIn: "1h" }
        );
        return token;
    }
}
