import React from "react";
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import NavBar from './components/NavBar';
import baseStyles from './baseStyles';

const App = () => {
  baseStyles()
  return (<NavBar />)
};

export default App;
