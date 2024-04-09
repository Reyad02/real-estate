import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvide";

const Navbar = () => {
    const { user, logOutUser } = useContext(AuthContext);

    const links =
        <>
            <li><NavLink to="/" >Home</NavLink></li>
            <li><NavLink to="/update-profile" >Update Profile</NavLink></li>
            <li><NavLink to="/user-profile" >User Profile</NavLink></li>
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
        <div className="navbar bg-base-100 md:mt-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">daisyUI</a>
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
                            <>
                                <div className="w-10 tooltip" data-tip={user.email}>
                                    {
                                        user.photoURL === null ?
                                            <img className="rounded-full" alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                            :
                                            <img src={user.photoURL} />
                                        // <img src={`${user.photoURL}`}></img>
                                        // ||  
                                        // <img className="rounded-full" alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    }
                                </div>
                                <button className="btn" onClick={handleLogout}>Logout</button>
                            </>
                            : <button><Link to="/login">Login</Link></button>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;