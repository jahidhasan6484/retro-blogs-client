import React, { useState, useContext } from 'react';
import "./Login.css";
import { UserContext } from "../../App";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../firebase.config";


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const LogIn = () => {
    const [user, setUser] = useContext(UserContext);
    const [newUser, setNewUser] = useState(false);

    const handleBlur = (e) => {
        let isFieldValid = true;
        if (e.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if (e.target.name === 'password') {
            const isPasswordValid = e.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(e.target.value);
            isFieldValid = isPasswordValid && passwordHasNumber;
        }
        if (isFieldValid) {
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
    }

    const handleSubmit = (e) => {
        if (newUser && user.email && user.password) {
            firebase.auth()
                .createUserWithEmailAndPassword(user.email, user.password)
                .then((res) => {
                    const newUserInfo = { ...user }
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setUser(newUserInfo);
                    updateUserName(user.name);
                })
                .catch((error) => {
                    const newUserInfo = { ...user }
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo);
                });
        }

        if (!newUser && user.email && user.password) {
            firebase.auth()
                .signInWithEmailAndPassword(user.email, user.password)
                .then((res) => {
                    const newUserInfo = { ...user }
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setUser(newUserInfo);
                    console.log("Sign in user info of", user.name);
                })
                .catch((error) => {
                    const newUserInfo = { ...user }
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo);
                });
        }

        e.preventDefault();
    }

    const updateUserName = name => {
        const user = firebase.auth().currentUser;

        user.updateProfile({
            displayName: name,
        }).then(function () {
            console.log("User name updated successfully");
        }).catch(function (error) {
            console.log(error);
        });
    }

    const userSignIn = () => {
        const newInfo = { ...user }
        newInfo.isSignedIn = true;
        setUser(newInfo);
    }
    return (
        <div className="login">
            <div className="container row">
                <div className="col-md-6">
                    <div className="greetings">
                        <h1>Welcome to Retro Blogs</h1>
                        <p>Log In or Sign Up to explore !</p>
                    </div>
                </div>
                <div className="col-md-6">
                    <form onSubmit={handleSubmit}>
                        <h2 className="mb-3">{newUser ? "Sign Up" : "Log In"}</h2>
                        {newUser && <input type="text" name="name" onBlur={handleBlur} placeholder="Your name" required className="form-control" />}
                        <input type="text" name="email" onBlur={handleBlur} placeholder="Enter your email address" required className="mt-2 form-control"></input>
                        <input type="password" name="password" onBlur={handleBlur} placeholder="Your password" required className="mt-2 form-control"></input>
                        <input type="submit" className="mt-3 button" value={newUser ? "Sign Up" : "Sign In"} />
                        {
                            newUser ? <p className="mt-3">Already have an account? <span onClick={() => setNewUser(!newUser)}>Login</span></p> : <p className="mt-3">Don't have an account? <span onClick={() => setNewUser(!newUser)}>Sign Up</span></p>
                        }
                    </form>
                    <p style={{ color: "red" }}>{user.error}</p>
                    {
                        user.success && <p style={{ color: "green" }}>User {newUser ? 'created' : 'logged in'} successfully</p>
                    }
                    {
                        user.success && userSignIn()
                    }
                </div>
            </div>
        </div>
    );
};

export default LogIn;