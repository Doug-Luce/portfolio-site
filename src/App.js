import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from './components/NavBar';
import baseStyles from './baseStyles';
import Home from './pages/Home';
import About from './pages/About';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import Project from './pages/Project';

// App renders the Mainlayout component inside of a Router component.
// The baseStyles() function is for giving a set of global css values.

const App = (props) => {
  return (
      <main>
        <baseStyles />
        <NavBar />
          <Route path ="/" exact component={Home} />
          <Route path ="/about" component={About} />
          <Switch>
            <Route path={`/projects/:id`} component={Project} />
            <Route path={`/projects`} render={()=><Redirect to={`/projects/0`}/>}  />
          </Switch>
          <Route path="/contact" component={Contact} />
        <Footer />
      </main>
)
};

export default App;
