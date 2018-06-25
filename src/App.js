import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import baseStyles from './baseStyles';
import Home from './pages/Home';
import About from './pages/About';
import Footer from './components/Footer';

// Placeholder pages for testing the Routes
const Projects = () => <div>Projects Page</div>;
const Contact = () => <div>Contact Page</div>;


// MainLayout is a component that contains all of the layout. It loads the necessary components for a page.
const MainLayout = () => (
  <main>
    <NavBar />
    <Route path ="/" exact component={Home} />
    <Route path ="/about" component={About} />
    <Route path ="/projects" component={Projects} />
    <Route path="/contact" component={Contact} />
    <Footer />
  </main>
);


// App renders the Mainlayout component inside of a Router component.
// The baseStyles() function is for giving a set of global css values.
const App = () => {
  baseStyles()
  return (
    <Router>
      <MainLayout />
    </Router>
)
};

export default App;
