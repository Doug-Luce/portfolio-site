import React from "react";
import projects from '../projects';
import ProjectPage from '../components/ProjectPage';

class Project extends React.Component {
  constructor(props) {
    super(props);
    // Binding the this to both methods.
    this.navigateRight = this.navigateRight.bind(this);
    this.navigateLeft = this.navigateLeft.bind(this);
    this.keyDown = this.keyDown.bind(this);

    this.state = {
      currentId: 0,
      projectCount: 0
    };
  }

  keyDown(event) {
    if(event.keyCode === 37) {
      console.log('Left Arrow press.');
      this.navigateLeft();
    }
    else if(event.keyCode === 39) {
      console.log('Right arrow pressed.');
      this.navigateRight();
    }
  };

  componentDidMount() {
    // On the initial load of the page let's set the id to the correct
    // id passed into the url bar. Let's also set the project count to
    // show how many projects have been passed into the page.
    // The event listener here detects keydown events and changes the
    // page depending on which arrow is clicked.
    this.setState({currentId: parseInt(this.props.match.params.id, 10)});
    this.setState({projectCount: projects.length});
    document.addEventListener("keydown", this.keyDown, false);
  }

  navigateRight() {
    // This will set the limit pased on how many projects there are
    // in the projects array. Then if the limit is not equal to how many
    // projects are there are we will push the current id to the url
    // + 1 to get the correct item.Then we set the state to show the change
    // of the id. This will cause a render.

    // This will add animations from animate.css by adding the
    // animated class and the name of the animation. Then we
    // are manually triggering the rerun of the animation by
    // setting the offsetHeight.
    let projectContent = document.getElementById('project-content');
    projectContent.className = 'animated fadeIn';
    projectContent.style.animation = 'none';
    projectContent.offsetHeight;
    projectContent.style.animation = null;

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
    // This will add animations from animate.css by adding the
    // animated class and the name of the animation. Then we
    // are manually triggering the rerun of the animation by
    // setting the offsetHeight.
    let projectContent = document.getElementById('project-content');
    projectContent.className = 'animated fadeIn';
    projectContent.style.animation = 'none';
    projectContent.offsetHeight;
    projectContent.style.animation = null;

    if(this.state.currentId === 0 || this.state.currentId < 0) {
      this.setState({currentId: this.state.projectCount -1});
      this.props.history.push(`/projects/${this.state.projectCount -1}`);
    } else {
      this.setState({currentId: this.state.currentId - 1});
      this.props.history.push(`/projects/${this.state.currentId - 1}`);
    }
  }

  render() {
    return(
      <div>
        <ProjectPage props={projects[this.state.currentId]} goLeft={this.navigateLeft} goRight={this.navigateRight}/>
      </div>
    );
  }
}

export default Project;