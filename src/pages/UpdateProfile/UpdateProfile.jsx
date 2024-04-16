import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../Provider/AuthProvide";
import { useLocation, useNavigate } from "react-router-dom";

const UpdateProfile = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const { user, updateProfileInfo, setLoading } = useContext(AuthContext);

    const UpdateProfileNameImg = (e) => {
        e.preventDefault();
        const updatedName = e.target.name.value || user.displayName;
        const updatedPhoto = e.target.image.value.trim() || user.photoURL;

        updateProfileInfo(updatedName, updatedPhoto)
            .then(() => {
                setLoading(false);
                navigate(location?.state ? location.state : "/user-profile");
                console.log("Profile Updated");

            }).catch((error) => {
                console.log(error);
            });
    }

    return (
        <div>
            <Helmet>
                <title>Update Profile</title>
            </Helmet>
            <div className='flex justify-center mt-24'>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 p-4">
                    <form className="card-body" onSubmit={UpdateProfileNameImg}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder={user.displayName} name="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" value={user.email} name="email" className="input input-bordered" readOnly />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input type="text" placeholder={user.photoURL} name="image" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;