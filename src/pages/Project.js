import React from "react";
import { H1, H2, P } from '../components/typography';
import { Link } from 'react-router-dom';
import ProjectStyles from './styles/ProjectStyles';
import { dump } from '../helpers';
import projects from '../projects';
import ProjectPage from '../components/ProjectPage';


class Project extends React.Component {
  constructor(props) {
    super(props);
    // Binding the this to both methods.
    this.navigateRight = this.navigateRight.bind(this);
    this.navigateLeft = this.navigateLeft.bind(this);

    this.state = {
      currentId: 0,
      projectCount: 0
    };
  }

  componentDidMount() {
    // On the initial load of the page let's set the id to the correct
    // id passed into the url bar. Let's also set the project count to
    // show how many projects have been passed into the page.
    this.setState({currentId: parseInt(this.props.match.params.id)});
    this.setState({projectCount: projects.length});
  }

  navigateRight() {
    // This will set the limit pased on how many projects there are
    // in the projects array. Then if the limit is not equal to how many
    // projects are there are we will push the current id to the url
    // + 1 to get the correct item.Then we set the state to show the change
    // of the id. This will cause a render.
    const limit = this.state.currentId + 1;
    if(!(limit === this.state.projectCount)) {
      // Set the url to /projects/currentId + 1
      this.props.history.push(`/projects/${this.state.currentId + 1}`);
      // Change the state the current id to the id + 1
      this.setState({currentId: this.state.currentId + 1});
    } else {
      // Here we will set the current id to be 0 effectively
      // creating a loop after going past the last project.
      this.setState({currentId: 0});
      this.props.history.push(`/projects/0`);
    }
  }

  navigateLeft() {
    if(this.state.currentId === 0 || this.state.currentId < 0) {
      this.setState({currentId: this.state.projectCount -1});
      console.log('I ran');
      this.props.history.push(`/projects/${this.state.projectCount -1}`);
    } else {
      this.setState({currentId: this.state.currentId - 1});
      this.props.history.push(`/projects/${this.state.currentId - 1}`);
    }
  }

  render() {
    return(
      <div>
        {/* <p>{dump(projects[this.state.currentId])}</p> */}
        <ProjectPage props={projects[this.state.currentId]}/>
        <button onClick={this.navigateLeft}>LEFT</button>
        <button onClick={this.navigateRight}>RIGHT</button>
      </div>
    );
  }
}

export default Project;