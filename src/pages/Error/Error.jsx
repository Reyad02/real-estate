import { Link } from "react-router-dom";
import 'animate.css';
import { Helmet } from 'react-helmet-async';



const Error = () => {
    return (
            <div className="flex justify-center flex-col items-center h-[100vh] text-center space-y-2 px-2 lg:px-0 animate__animated animate__bounce">
                <h1 className="text-5xl font-bold ">404</h1>
                <h2 className="text-3xl font-bold ">Sorry, we couldn't find this page</h2>
                <Link className="btn rounded-md btn-primary" to="/">Go Back home</Link>
            </div>
    );
};

export default Error;