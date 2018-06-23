import React from "react";
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './pages/home';
import NavBar from './components/navBar';
import baseStyles from './baseStyles';

const App = () => {
  baseStyles()
  return (<NavBar />)
};

export default App;
