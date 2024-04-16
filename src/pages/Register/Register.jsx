import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvide";
import { Helmet } from "react-helmet-async";
import swal from "sweetalert";


const Register = () => {
    const { registerUser } = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const pass = e.target.pass.value;
        const displayName = e.target.name.value;
        const photo = e.target.image.value;
        const passVerification = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
        if (!passVerification.test(pass)) {
            return swal({
                title: "Use a strong password",
                // text: "Already in the cart",
                icon: "warning",
                dangerMode: true,
            });
        }
        registerUser(email, pass)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                swal({
                    title: "Registered Successfully",
                    // text: "Already in the cart",
                    icon: "success",
                    dangerMode: false,
                });
                navigate(location?.state ? location.state : "/");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                swal({
                    title: errorMessage,
                    // text: "Already in the cart",
                    icon: "warning",
                    dangerMode: true,
                });
                console.log(errorMessage);
            });
    }
    return (
        <>
            <Helmet>
                <title>Registration</title>
            </Helmet>
            <div className='flex justify-center mt-24'>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 p-4">
                    <form className="card-body" onSubmit={handleRegister}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input type="text" placeholder="Photo URL" name="image" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="Password" name="pass" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                    <p>If you already have an account then please <Link className="text-blue-400" to="/login">Login</Link></p>
                </div>
            </div>
        </>
    );
};

export default Register;