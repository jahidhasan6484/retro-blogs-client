import React, { useContext } from 'react';
import './Profile.css';
import { UserContext } from "../../App";
import firebase from "firebase/app";
import "firebase/auth";

const Profile = () => {
    const [user, setUser] = useContext(UserContext);

    const handleSignOut = () => {
        firebase.auth()
            .signOut()
            .then(res => {
                const signOutUser = {
                    isSignedIn: false,
                    name: '',
                    email: '',
                    photo: '',
                    error: '',
                    success: false
                }
                setUser(signOutUser);
                console.log(res);
            })
            .catch(err => {
                console.log(err);
                console.log(err.message);
            })
    }

    return (
        <div className="login">
            <div className="container row">
                <div className="col-md-6">
                    <div className="greetings">
                        <h1>Get in touch with Retro Blogs!</h1>
                    </div>
                </div>
                <div className="col-md-6 logOut">
                    <h3>{user.name}</h3>
                    <h5>{user.email}</h5>
                    <button className="button" onClick={handleSignOut}>Log Out</button>
                </div>
            </div>
        </div>
    );
};

export default Profile;