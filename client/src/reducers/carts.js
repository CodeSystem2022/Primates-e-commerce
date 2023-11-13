import { FETCH_CART, START_LOADING, END_LOADING } from "../constants/constants";
export default (state = { isCartLoading: true, cart: [] }, action) => {
    switch (action.type) {
        case FETCH_CART:
            return {
                ...state,
                cart: action.payload,
            };
        case START_LOADING:
            return {
                ...state,
                isCartLoading: true,
            };
        case END_LOADING:
            return {
                ...state,
                isCartLoading: false,
            };
        default:
            return state;
    }
};
