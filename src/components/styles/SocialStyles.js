import styled from 'styled-components';

const SocialStyles = styled.div`
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;

  .social-buttons {
    border-top: 5px solid #1A97B4;
    border-bottom: 5px solid #1A97B4;
    display: flex;
    justify-content: space-evenly;
    padding: 1rem;
  }

  .social-buttons a:hover {
    cursor: pointer;
  }

  .social-buttons li {
    list-style-type: none;
  }
`;

export default SocialStyles;