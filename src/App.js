import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import baseStyles from './baseStyles';
import Home from './pages/home';

const About = () => <div>About Page</div>;
const Projects = () => <div>Projects Page</div>;
const Contact = () => <div>Contact Page</div>;

const MainLayout = () => (
  <main>
    <NavBar />
    <Route path ="/" exact component={Home} />
    <Route path ="/about" component={About} />
    <Route path ="/projects" component={Projects} />
    <Route path="/contact" component={Contact} />
    {/* <Menu /> */}
  </main>
);

const App = () => {
  baseStyles()
  return (
    <Router>
      <MainLayout />
    </Router>
)
};

export default App;
