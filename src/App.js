import React, { createContext, useState } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from "./Components/Header/Header";
import Details from "./Components/Details/Details";
import Profile from "./Components/Profile/Profile";
import Home from "./Components/Home/Home";
import LogIn from "./Components/LogIn/LogIn";

export const UserContext = createContext();

function App() {
  const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    password: '',
    photo: ''
  })


  return (

    <UserContext.Provider value={[user, setUser]}>
      {
        !user.isSignedIn ? <LogIn /> :
          <Router>
            <Header />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/home">
                <Home />
              </Route>
              <Route path="/details/:id">
                <Details />
              </Route>
              <Route path="/profile">
                <Profile />
              </Route>
            </Switch>
          </Router>
      }

    </UserContext.Provider>
  );
}

export default App;
