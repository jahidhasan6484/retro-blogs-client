import React, { useState, useEffect } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from "./Components/Header/Header";
import Details from "./Components/Details/Details";
import Profile from "./Components/Profile/Profile";
import Home from "./Components/Home/Home";
import SignUp from "./Components/SignUp/SignUp";
import LogIn from "./Components/LogIn/LogIn";

function App() {

  return (
    // <SignUp />
    <LogIn />
    // <Router>
    //  <Header />
    //   <Switch>
    //     <Route exact path="/">
    //     <Home />
    //     </Route>
    //     <Route path="/home">
    //       <Home />
    //     </Route>
    //     <Route path="/details/:id">
    //       <Details />
    //     </Route>
    //     <Route path="/profile">
    //       <Profile />
    //     </Route>
    //   </Switch>
    // </Router>

  );
}

export default App;
