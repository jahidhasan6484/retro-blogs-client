import React, { useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../firebase.config"


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const LogIn = () => {
    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        photo: ''
    })

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
    return (
        <div>
            {
                user.isSignedIn && <div>
                    <p>Welcome, {user.name}</p>
                    <p>Your email: {user.email}</p>
                    <img src={user.photo} alt="" srcset="" />
                </div>
            }

            <h1>Our own Authentication System</h1>

            <input type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser" id="" />
            <lable htmlFor="newUser">New user? Sign Up</lable>

            <form onSubmit={handleSubmit}>
                {newUser && <input type="text" name="name" onBlur={handleBlur} placeholder="Your name" />}
                <br /><br />
                <input type="text" name="email" onBlur={handleBlur} placeholder="Enter your email address" required></input>
                <br /><br />
                <input type="password" name="password" onBlur={handleBlur} placeholder="Your password" required></input>
                <br /><br />
                <input type="submit" value={newUser ? "Sign Up" : "Sign In"} />
            </form>

            <p style={{ color: "red" }}>{user.error}</p>
            {
                user.success && <p style={{ color: "green" }}>User {newUser ? 'created' : 'logged in'} successfully</p>
            }

        </div>
    );
};

export default LogIn;