import React from "react";
import "./NotFound.css";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="PageNotFound">
            <img width="100" height="100" src="https://img.icons8.com/ios-filled/100/A30D03/error--v1.png" alt="error--v1" />
            <h1>Page Not Found </h1>
            <Link to="/">Home</Link>
        </div>
    );
};

export default NotFound;
