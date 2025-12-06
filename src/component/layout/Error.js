import "./Error.css";
import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="error-page">
            <div className="error-container">
                <div className="error-element">
                    <h1>Something went wrong!</h1>
                    <h3>Please try again later.</h3>
                    <Link to="/">
                        Go Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Error;
