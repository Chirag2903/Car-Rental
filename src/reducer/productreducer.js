export const productsreducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case "ALL_PRODUCT_REQUEST":
            return {
                loading: true,
                products: []
            };
        case "ALL_PRODUCT_SUCCESS":
            return {
                loading: false,
                products: action.payload.products,
            };
        case "ALL_PRODUCT_FAIL":
            return {
                loading: false,
                error: action.payload
            };
        case "CLEAR_ERRORS":
            return {
                ...state,
                error: null
            };

        default:
            return state;
    }
}

export const productdetailsreducers = (state = { product: {} }, action) => {

    switch (action.type) {
        case "PRODUCT_DETAILS_REQUEST":
            return {
                loading: true,
                ...state
            };
        case "PRODUCT_DETAILS_SUCCESS":
            return {
                loading: false,
                product: action.payload,
            };
        case "PRODUCT_DETAILS_FAIL":
            return {
                loading: false,
                error: action.payload
            };
        case "CLEAR_ERRORS":
            return {
                ...state,
                error: null
            };

        default:
            return state;
    }
}

const storedorderinfo = JSON.parse(sessionStorage.getItem("orderinfo"));
export const orderinforeducers = (state = { orderinfo: storedorderinfo || {} }, action) => {

    switch (action.type) {
        case "SAVE_ORDER_INFO":
            return {
                ...state,
                orderinfo: action.payload,
            };

        default:
            return state;
    }
}

