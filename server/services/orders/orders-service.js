import { v4 as uuidv4 } from "uuid";
import dotenv from "dotenv";
// import mercadopago from "mercadopago";
dotenv.config();

// mercadopago.configure({
//     access_token: process.env.ACCESS_TOKEN
//   });

export default class OrdersService {
    #rep;
    #cartsService;

    constructor(repo, cartsService) {
        this.#rep = repo;
        this.#cartsService = cartsService;
    }
    async createOrder(cartId, userEmail) {
        const orderId = uuidv4();
        const orderDate = new Date().toLocaleString();
        const cart = await this.#cartsService.getCartProducts(cartId);

        const order = {
            orderId: orderId,
            date: orderDate,
            userId: cartId,
            products: cart.products,
        };   

        // let preference = {
        //     items: order.products.map((p) => ({
        //             id: p.productId,
        //             title: p.name,
        //             description: p.description,
        //             unit_price: p.price,
        //             quantity: p.cant,
        //             picture_url:p.image,
        //             currency_id: "ARS",
        //             category_id: 'none'
        //     })),
        //     payer: {
        //         name: 'João',
        //         surname: 'Silva',
        //         email: 'user@email.com',
        //         phone: {
        //           area_code: '11',
        //           number: '4444-4444'
        //         },
        //         identification: {
        //           type: 'CPF',
        //           number: '19119119100'
        //         },
        //         address: {
        //           street_name: 'Street',
        //           street_number: 123,
        //           zip_code: '06233200'
        //         }
        //     },    
        //     back_urls: {
        //         success: 'http://localhost:8000/success',
        //         failure: 'http://localhost:8000/failure',
        //         pending: 'http://localhost:8000/pending'
        //     },
        //     auto_return: 'approved',
        //         payment_methods: {
        //         excluded_payment_methods: [],
        //         excluded_payment_types: [],
        //         installments: 1
        //     },
        //     notification_url: 'https://www.your-site.com/ipn',
        //     statement_descriptor: 'MEUNEGOCIO',
        //     external_reference: 'Reference_1234',
        //     expires: true,
        //     expiration_date_from: '2016-02-01T12:00:00.000-04:00',
        //     expiration_date_to: '2016-02-28T12:00:00.000-04:00'
        // };

        // mercadopago.preferences
        //   .create(preference)
        //   .then(function (response) {
        //     // Este valor substituirá a string "<%= global.id %>" no seu HTML
        //     console.log('Success: ' + response)
        //     // global.id = response.body.id;
        //   })
        //   .catch(function (error) {
        //     console.log(error);
        //   });
        
        
        const result = await this.#rep.createOrder(order);

        //Check: Si por algún motivo la orden no se emite de manera correcta, se elimina de la base de datos la orden erronea y se muestra un error.
        if (result) {
            await this.#cartsService.clearCart(cartId);
        } else {
            await this.#rep.deleteFailedOrder(order.orderId);
            throw new Error("Order couldn't be processed. Try Again.");
        }

        return result;
    }
    async getOrders(userId) {
        const result = await this.#rep.getOrders(userId);
        return result;
    }
}
