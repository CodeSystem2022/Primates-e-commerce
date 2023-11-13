import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:8000",
});

API.interceptors.request.use((req) => {
    if (localStorage.getItem("user")) {
        req.headers.Authorization = `Bearer ${
            JSON.parse(localStorage.getItem("user")).token
        }`;
    }
    return req;
});

/*PRODUCTS*/
export const fetchProducts = () => API.get("/api/products");
export const fetchProduct = (id) => API.get(`/api/products/${id}`);

export const createProduct = (newProduct) =>
    API.post("/api/products", newProduct);

export const updateProduct = (id, updatedProduct) =>
    API.put(`/api/products/${id}`, updatedProduct);

export const deleteProduct = (id) => API.delete(`/api/products/${id}`);

/*AUTH*/
export const logIn = (formData) => API.post("/login", formData);
export const register = (formData) => API.post("/api/users", formData);

/*CART*/
export const fetchCart = () => API.get(`/api/shoppingcartproducts`);
export const addProdToCart = (product) =>
    API.post("/api/shoppingcartproducts", product);
export const removeProdFromCart = (idProduct) =>
    API.delete(`/api/shoppingcartproducts/${idProduct}`);

export const fetchOrders = () => API.get(`/api/orders`);
export const addNewOrder = () => API.post("/api/orders");
