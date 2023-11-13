import http from "http";
import express from "express";
import runDb from "../database/db.js";
import bodyParser from "body-parser";
import cors from "cors";

import {
    productsRoutes,
    usersRoutes,
    cartsRoutes,
    ordersRoutes,
} from "../routes/index.js";




const app = express();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
const httpServer = http.createServer(app);


/* ----------Routes---------- */

/* Products */
app.use("/api/products", productsRoutes);

/* Users */
app.use("/", usersRoutes);

/* Carts */
app.use("/api/shoppingcartproducts", cartsRoutes);

/* Orders */
app.use("/api/orders", ordersRoutes);

/* ----------Server run---------- */

export function crearServidor(PORT) {
    runDb();
    const server = httpServer.listen(process.env.PORT || PORT, () => {
        console.log(
            `Server running on port: ${process.env.PORT || PORT} -- Worker ${process.pid} started`
        );
    });
    server.on("error", (error) => console.log(`Error en servidor: ${error}`));
}
