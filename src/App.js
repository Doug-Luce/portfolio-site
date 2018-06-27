import React from "react";
import { Route } from "react-router-dom";
import NavBar from './components/NavBar';
import baseStyles from './baseStyles';
import Home from './pages/Home';
import About from './pages/About';
import Footer from './components/Footer';

// Placeholder pages for testing the Routes
const Projects = () => <div>Projects Page</div>;
const Contact = () => <div>Contact Page</div>;

// App renders the Mainlayout component inside of a Router component.
// The baseStyles() function is for giving a set of global css values.

const App = () => {
  baseStyles()
  return (
      <main>
        <NavBar />
        <Route path ="/" exact component={Home} />
        <Route path ="/about" component={About} />
        <Route path ="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
        <Footer />
      </main>
)
};

export default App;
