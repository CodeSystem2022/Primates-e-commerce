import {
    FETCH_ALL,
    START_LOADING,
    END_LOADING,
    FETCH_PRODUCT,
    CREATE,
    UPDATE,
    DELETE,
} from "../constants/constants";

export default (state = { isLoading: true, products: [] }, action) => {
    switch (action.type) {
        case FETCH_ALL:
            return {
                ...state,
                products: action.payload,
            };
        case FETCH_PRODUCT:
            return {
                ...state,
                product: action.payload,
            };
        case CREATE:
            return {
                ...state,
                products: [...state.products, action.payload],
            };
        case UPDATE:
            return {
                ...state,
                products: state.products.map((p) =>
                    p.productId === action.payload.productId
                        ? action.payload
                        : p
                ),
            };
        case DELETE:
            return {
                ...state,
                products: state.products.filter(
                    (p) => p.productId !== action.payload
                ),
            };
        case START_LOADING:
            return {
                ...state,
                isLoading: true,
            };
        case END_LOADING:
            return {
                ...state,
                isLoading: false,
            };
        default:
            return state;
    }
};
