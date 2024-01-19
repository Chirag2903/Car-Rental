import axios from "axios";


//Create Order
export const createorder = (order) => async (dispatch) => {
    try {
        dispatch({ type: "CREATE_ORDER_REQUEST" });

        const { data } = await axios.post("/order/new", order);

        dispatch({ type: "CREATE_ORDER_SUCCESS", payload: data });
    } catch (error) {
        dispatch({
            type: "CREATE_ORDER_FAIL",
            payload: error.response.data.message,
        });
    }

}

//My Orders
export const myorders = () => async (dispatch) => {
    try {
        dispatch({ type: "MY_ORDERS_REQUEST" });

        const { data } = await axios.get("/my/orders");

        dispatch({ type: "MY_ORDERS_SUCCESS", payload: data.orders });
    } catch (error) {
        dispatch({
            type: "MY_ORDERS_FAIL",
            payload: error.response.data.message,
        });
    }

}

//Get Order Details
export const getOrderDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: "ORDER_DETAILS_REQUEST" });

        const { data } = await axios.get(`/order/${id}`);

        dispatch({ type: "ORDER_DETAILS_SUCCESS", payload: data.order });
    } catch (error) {
        dispatch({
            type: "ORDER_DETAILS_FAIL",
            payload: error.response.data.message,
        });
    }

}

// Clearing Errors
export const clearerrors = () => async (dispatch) => {
    dispatch({ type: "CLEAR_ERRORS" });
};
