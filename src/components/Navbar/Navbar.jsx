import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvide";
import logo from "../../assets/logo.jpg"

const Navbar = () => {
    const { user, logOutUser } = useContext(AuthContext);

    const links =
        <>
            <li><NavLink to="/" >Home</NavLink></li>
            <li><NavLink to="/update-profile" >Update Profile</NavLink></li>
            <li><NavLink to="/user-profile" >User Profile</NavLink></li>
            <li><NavLink to="/cart" >Cart</NavLink></li>

        </>

    const handleLogout = () => {
        logOutUser()
            .then(() => {
                // console.log("Logout successful");
            }).catch((error) => {
                console.log(error);
            });

    }
    return (
        <div className="navbar bg-base-100 md:mt-4 max-w-7xl mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <Link className="" to="/">
                    <div>
                        <img src={logo} alt="" className="max-w-16 rounded-full" />
                    </div>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-8">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="menu menu-horizontal px-1 gap-8">
                    {
                        user ?
                            <div className="flex items-center gap-4">
                                <div className="w-10 tooltip cursor-pointer" data-tip={user.displayName || user.email}>
                                    {
                                        user.photoURL === null ?
                                            <img className="rounded-full" alt="Tailwind CSS Navbar component" src="https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg" />
                                            :
                                            <img className="rounded-full" src={user.photoURL} />
                                    }
                                </div>
                                <button className="btn" onClick={handleLogout}>Logout</button>
                            </div>
                            : <button className="btn"><Link to="/login">Login</Link></button>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;