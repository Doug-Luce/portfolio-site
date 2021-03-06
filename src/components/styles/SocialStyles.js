import styled from 'styled-components'

const SocialStyles = styled.div`
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;

  .social-buttons {
    display: flex;
    justify-content: space-evenly;
    padding: 1rem;
  }

  .social-buttons-contact {
    border-top: 5px solid #FFECD4;
    border-bottom: 5px solid #FFECD4;
  }

  .social-buttons a:hover {
    cursor: pointer;
  }

  .social-buttons li {
    list-style-type: none;
  }
  .social-buttons li:hover {
    animation: rotateIn .7s;
  }

`

export default SocialStyles
