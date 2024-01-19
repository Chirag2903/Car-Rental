export const userreducer = (state = { user: {} }, action) => {

    switch (action.type) {
        case "REGISTER_USER_REQUEST":
        case "LOAD_USER_REQUEST":
        case "LOGOUT_USER_REQUEST":
        case "LOGIN_USER_REQUEST":
            return {
                loading: true,
                isauthenticated: false
            };

        case "REGISTER_USER_SUCCESS":
        case "LOAD_USER_SUCCESS":
        case "LOGIN_USER_SUCCESS":
            return {
                ...state,
                loading: false,
                isauthenticated: true,
                user: action.payload
            };
        case "REGISTER_USER_FAIL":
        case "LOGIN_USER_FAIL":
            return {
                ...state,
                loading: false,
                isauthenticated: false,
                user: null,
                error: action.payload
            };
        case "LOAD_USER_FAIL":
            return {
                loading: false,
                isauthenticated: false,
                user: null,
                error: action.payload
            }

        case "CLEAR_ERRORS":
            return {
                ...state,
                error: null
            };

        case "LOGOUT_SUCCESS":
            return {
                loading: false,
                user: null,
                isauthenticated: false,
            }
        case "LOGOUT_FAIL":
            return {
                ...state,
                loading: false,
                error: action.payload,
            }

        default:
            return state;

    }
}