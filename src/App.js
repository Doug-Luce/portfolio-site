import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from './components/NavBar';
import baseStyles from './baseStyles';
import Home from './pages/Home';
import About from './pages/About';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import Project from './pages/Project';

// App renders the Mainlayout component inside of a Router component.
// The baseStyles() function is for giving a set of global css values.

const App = () => {
  baseStyles()
  return (
      <main>
        <NavBar />
        <Switch>
          <Route path ="/" exact component={Home} />
          <Route path ="/about" component={About} />
          <Route path ="/projects" component={Project} />
          <Route path="/contact" component={Contact} />
          <Route path="/projects/:id" render={() => <p>hi</p>} />
        </Switch>
        <Footer />
      </main>
)
};

export default App;
