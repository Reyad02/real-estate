import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvide";
import dateFormat, { masks } from "dateformat";


const UserProfile = () => {
    const { user} = useContext(AuthContext);
    console.log(user);
    return (
        <div className="flex flex-col items-center ">
            <img className="rounded-full w-32 h-32" src={ user.photoURL||"https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg" }/>
            <h1>Name: {user?.displayName}</h1>
            <h1>Email: {user?.email}</h1>
            <h1>Profile create time: {dateFormat(user?.metadata?.creationTime, "dddd, mmmm dS, yyyy, h:MM:ss TT")}</h1>
            <h1>Profile login time: {dateFormat(user?.metadata?.lastSignInTime, "dddd, mmmm dS, yyyy, h:MM:ss TT")}</h1>
        </div>
    );
};

export default UserProfile;