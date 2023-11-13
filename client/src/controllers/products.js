import {
    FETCH_ALL,
    FETCH_PRODUCT,
    START_LOADING,
    END_LOADING,
    CREATE,
    UPDATE,
    DELETE,
} from "../constants/constants";
import * as api from "../api";

export const getProducts = () => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });

        const { data } = await api.fetchProducts();

        dispatch({ type: FETCH_ALL, payload: data });
        dispatch({ type: END_LOADING });
    } catch (error) {
        console.log("Error: " + error);
    }
};
export const getProduct = (id) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });

        const { data } = await api.fetchProduct(id);

        dispatch({ type: FETCH_PRODUCT, payload: data });
        dispatch({ type: END_LOADING });
    } catch (error) {
        console.log("Error: " + error);
    }
};
export const createProduct = (product, navigate) => async (dispatch) => {
    try {
        const { data } = await api.createProduct(product);
        dispatch({ type: CREATE, payload: data });
        navigate(`/products`);
    } catch (error) {
        console.log(error);
    }
};
export const updateProduct = (id, updatedProduct) => async (dispatch) => {
    try {
        const { data } = await api.updateProduct(id, updatedProduct);
        dispatch({ type: UPDATE, payload: data });
    } catch (error) {
        console.log(error);
    }
};
export const deleteProduct = (id) => async (dispatch) => {
    try {
        await api.deleteProduct(id);

        dispatch({ type: DELETE, payload: id });
    } catch (error) {
        console.log(error);
    }
};
