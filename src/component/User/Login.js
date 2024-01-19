import React, { useEffect, useState } from 'react';
import "./Login.css"
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router';
import Loader from '../layout/Loader';



const Login = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { loading, isauthenticated } = useSelector((state) => state.user);

    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    const handleToggle = () => {
        setIsLogin(!isLogin);
    };

    const handleAction = async () => {
        const apiUrl = isLogin ? '/login' : '/register';
        const userData = {
            email,
            password,
            ...(isLogin ? {} : { username }),
        };

        try {
            dispatch({ type: isLogin ? "LOGIN_USER_REQUEST" : "REGISTER_USER_REQUEST" });

            const response = await axios.post(apiUrl, userData);
            const user = response.data.user;

            dispatch({
                type: isLogin ? "LOGIN_USER_SUCCESS" : "REGISTER_USER_SUCCESS",
                payload: user,
            });
        } catch (error) {
            dispatch({
                type: isLogin ? "LOGIN_USER_FAIL" : "REGISTER_USER_FAIL",
                payload: error.response.data.message,
            });
        }
    };

    useEffect(() => {
        dispatch({ type: "CLEAR_ERRORS" })

        if (isauthenticated) {
            navigate("/account")
        }

    }, [dispatch, isauthenticated, navigate])


    return (
        <>
            {
                loading ? <Loader /> : (
                    <>

                        <div className="login-container">

                            <div className="toggle-container">
                                <button className={isLogin ? 'active' : ''} onClick={handleToggle}>
                                    Login
                                </button>
                                <button className={!isLogin ? 'active' : ''} onClick={handleToggle}>
                                    Signup
                                </button>
                            </div>
                            <form className={`login-form ${isLogin ? 'login' : 'signup'}`}>
                                {isLogin || (
                                    <>
                                        <label htmlFor="username">Username</label>
                                        <input
                                            type="text"
                                            id="username"
                                            placeholder="Enter your username"
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                        />
                                    </>
                                )}
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />

                                <button type="button" onClick={handleAction}>
                                    {isLogin ? 'Login' : 'Signup'}
                                </button>
                            </form>
                        </div>
                    </>
                )
            }
        </>
    );
}

export default Login;
