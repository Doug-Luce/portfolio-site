import React from 'react';
import { dump } from '../helpers';

const ProjectPage = ({props}) => {
  return(
    <div>
      <p>{console.log(props)}</p>
      <img src={props.imageUrl} />
    </div>
  );
};

export default ProjectPage;