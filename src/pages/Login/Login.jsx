import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvide";
import { Link, useLocation, useNavigate } from "react-router-dom";
import swal from 'sweetalert';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
    const { loginUser, googleLogin, githubLogin } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const [hide, setHide] = useState(true);

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
                swal({
                    title: "Wrong email or password",
                    // text: "Already in the cart",
                    icon: "warning",
                    dangerMode: true,
                });

            });
    }

    const handleGoogleSignin = () => {
        googleLogin()
            .then((result) => {
                const googleUser = result.user;
                console.log(googleUser);
                navigate(location?.state ? location.state : "/");

            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);

            });
    }

    const handleGithubSignin = () => {
        githubLogin()
            .then((result) => {
                const googleUser = result.user;
                console.log(googleUser);
                navigate(location?.state ? location.state : "/");

            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);

            });
    }

    const showHidePass = () => {
        setHide(!hide);
    }
    return (
        <>
            <Helmet>
                <title>Login</title>
            </Helmet>
            <div className='flex justify-center md:mt-6 lg:mt-24 '>
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
                            <input type={hide ? "password" : "text"} placeholder="Password" name="pass" className="input input-bordered" required />
                            <div className=" absolute top-48 right-4 w-16 cursor-pointer" onClick={showHidePass}>
                                {
                                    (hide && <FaEye className=""></FaEye>) || <FaEyeSlash></FaEyeSlash>
                                }
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <div className="flex justify-center gap-4">
                        <button onClick={handleGoogleSignin} className="btn btn-circle btn-outline">
                            <FaGoogle />
                        </button>
                        <button onClick={handleGithubSignin} className="btn btn-circle btn-outline">
                            <FaGithub />
                        </button>
                    </div>
                    <p className="text-center">If you don't have any account then please <Link className="text-blue-400" to="/register">Register</Link> first</p>
                </div>
            </div>
        </>
    );
};

export default Login;