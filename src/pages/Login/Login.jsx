import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvide";
import { Link, useLocation, useNavigate } from "react-router-dom";
import swal from 'sweetalert';

const Login = () => {
    const { loginUser } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const pass = e.target.pass.value;
        loginUser(email, pass)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                navigate(location?.state ? location.state : "/");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
                swal(errorMessage, "error");

            });
    }
    return (
        <div className='flex justify-center mt-24'>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 p-4">
                <form className="card-body" onSubmit={handleLogin}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Email" name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="Password" name="pass" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <p className="text-center">If you don't have any account then please <Link className="text-blue-400" to= "/register">Register</Link> first</p>
            </div>
        </div>
    );
};

export default Login;