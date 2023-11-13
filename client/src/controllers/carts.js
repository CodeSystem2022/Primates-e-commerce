import { FETCH_CART, START_LOADING, END_LOADING } from "../constants/constants";
import * as api from "../api";

export const getCart = () => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });

        const { data } = await api.fetchCart();

        dispatch({ type: FETCH_CART, payload: data });

        dispatch({ type: END_LOADING });

        return data;
    } catch (error) {
        console.log(error);
    }
};
export const addProduct = (product) => async (dispatch) => {
    try {
        const { data } = await api.addProdToCart(product);
        dispatch({ type: FETCH_CART, payload: data });
    } catch (error) {
        console.log("Error: " + error);
    }
};
export const removeProduct = (idProduct) => async (dispatch) => {
    try {
        const { data } = await api.removeProdFromCart(idProduct);
        dispatch({ type: FETCH_CART, payload: data });
    } catch (error) {
        console.log("Error: " + error);
    }
};
