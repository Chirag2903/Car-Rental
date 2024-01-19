//load isko dispatch app.js mein likha hia
import axios from "axios";

export const loaduser = () => async (dispatch) => {
    try {
        dispatch({ type: "LOAD_USER_REQUEST" });

        const { data } = await axios.get("/profile");

        dispatch({ type: "LOAD_USER_SUCCESS", payload: data.user });

    } catch (error) {
        dispatch({
            type: "LOAD_USER_FAIL",
            payload: error.response.data.message
        })
    }

}


//LOGOUT
export const logout = () => async (dispatch) => {
    try {
        dispatch({ type: "LOGOUT_USER_REQUEST" });

        await axios.get("/logout");

        dispatch({ type: "LOGOUT_SUCCESS" });

    } catch (error) {
        dispatch({
            type: "LOGOUT_FAIL",
            payload: error.response.data.message
        })
    }

}