import {
    CREATE_ORDER,
    FETCH_ORDERS,
    START_LOADING,
    END_LOADING,
} from "../constants/constants";
import * as api from "../api";

export const addOrder = () => async (dispatch) => {
    try {
        const { data } = await api.addNewOrder();

        dispatch({ type: CREATE_ORDER, payload: data });
    } catch (error) {
        console.log("Error: " + error);
    }
};
export const getOrders = () => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });

        const { data } = await api.fetchOrders();

        dispatch({ type: FETCH_ORDERS, payload: data });
        dispatch({ type: END_LOADING });
    } catch (error) {
        console.log("Error: " + error);
    }
};
