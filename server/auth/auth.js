import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const isAuth = (req, res, next) => {
    const authHeader = req.headers.authorization;
    let token;

    if (!authHeader) {
        return res.status(403).json("Error: User must be logged.");
    }

    if (authHeader.startsWith("Bearer ")) {
        token = authHeader.substring(7, authHeader.length);
    } else {
        return res.status(403).json("Error: Invalid token.");
    }

    try {
        const decodedData = jwt.verify(token, process.env.TOKEN_SS_WORD);
        req.userId = decodedData.userId;
        req.userEmail = decodedData.email;
    } catch (error) {
        return res.status(403).json("Error: Invalid token access.");
    }

    next();
};
