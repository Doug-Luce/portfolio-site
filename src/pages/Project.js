import React from "react";
import { H1, H2, P } from '../components/typography';
import { Link } from 'react-router-dom';
import ProjectStyles from './styles/ProjectStyles';
import { dump } from '../helpers';

const projects = [
  {
    id: 0,
    projectName: 'Calculator',
    projectType: 'JS'
  },
  {
    id: 1,
    projectName: 'Pomodoro',
    projectType: 'React'
  },
  {
    id: 2,
    projectName: 'Adventure Time',
    projectType: 'Api'
  },
];

class Project extends React.Component {
  constructor(props) {
    super(props);
    this.navigateRight = this.navigateRight.bind(this);
    this.navigateLeft = this.navigateLeft.bind(this);

    this.state = {
      currentId: 0
    };
  }

  componentDidMount(props) {
    this.setState({currentId: parseInt(this.props.match.params.id)});
    dump(this.state);
  }

  navigateRight() {
    this.setState({currentId: this.state.currentId + 1});
    this.props.history.push(`/projects/${this.state.currentId + 1}`);
  }

  navigateLeft() {
    this.setState({currentId: this.state.currentId - 1});
    this.props.history.push(`/projects/${this.state.currentId - 1}`);
  }

  render() {
    return(
      <div>
        <p>{dump(projects[this.state.currentId])}</p>
        <button onClick={this.navigateLeft}>LEFT</button>
        <button onClick={this.navigateRight}>RIGHT</button>
      </div>
    );
  }
}

// const Project = ({ match }) => (
//   <div>
//     <p>{JSON.stringify(projects[match.params.id])}</p>
//   </div>
// );

export default Project;