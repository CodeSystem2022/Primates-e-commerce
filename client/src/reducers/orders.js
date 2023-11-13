import {
    CREATE_ORDER,
    START_LOADING,
    END_LOADING,
    FETCH_ORDERS,
} from "../constants/constants";
export default (state = { isOrderLoading: true, orders: [] }, action) => {
    switch (action.type) {
        case FETCH_ORDERS:
            return {
                ...state,
                orders: action.payload,
            };
        case CREATE_ORDER:
            return { ...state, orders: [...state.orders, action.payload] };

        case START_LOADING:
            return {
                ...state,
                isOrderLoading: true,
            };
        case END_LOADING:
            return {
                ...state,
                isOrderLoading: false,
            };
        default:
            return state;
    }
};
