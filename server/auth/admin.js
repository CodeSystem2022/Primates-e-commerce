import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const isAdmin = (req, res, next) => {
    const authHeader = req.headers.authorization;
    let token;

    if (authHeader.startsWith("Bearer ")) {
        token = authHeader.substring(7, authHeader.length);
    } else {
        return res.status(403).json("Error: Invalid token.");
    }

    let decodedData = jwt.verify(token, process.env.TOKEN_SS_WORD);

    if (decodedData.email === process.env.ADMIN_EMAIL) {
        next();
    } else {
        res.status(403).json("Error: Must be logged as ADMIN.");
    }
};
