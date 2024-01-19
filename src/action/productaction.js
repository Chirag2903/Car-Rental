import axios from "axios";

export const getproduct = () => async (dispatch) => {
    try {
        dispatch({ type: "ALL_PRODUCT_REQUEST" });
        const response = await axios.get("/allproducts");
        dispatch({ type: "ALL_PRODUCT_SUCCESS", payload: response.data })
    } catch (error) {
        dispatch({
            type: "ALL_PRODUCT_FAIL",
            payload: error.response.data.message,
        })
    }
}

// Individual Product Details
export const getproductdetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: "PRODUCT_DETAILS_REQUEST" });
        const { data } = await axios.get(`/car/${id}`);
        dispatch({ type: "PRODUCT_DETAILS_SUCCESS", payload: data.product })
    } catch (error) {
        dispatch({
            type: "PRODUCT_DETAILS_FAIL",
            payload: error.response.data.message,
        })
    }
}

export const saveorderdetails = (data) => async (dispatch) => {
    dispatch({
        type: "SAVE_ORDER_INFO",
        payload: data,
    });

    localStorage.setItem("orderinfo", JSON.stringify(data));
};

export const clearerrors = () => async (dispatch) => {
    dispatch({ type: "CLEAR_ERRORS" })
}