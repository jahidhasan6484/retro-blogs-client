import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from "./Components/Header/Header";

function App() {
  return (
    <Router>
      <Header />
    </Router>
    
  );
}

export default App;
