import styled from 'styled-components'
import * as palette from '../color'

const NavStyles = styled.nav`
  @import url('https://fonts.googleapis.com/css?family=Jura');
  align-items: center;
  background-image: ${palette.navGradient};
  display: flex;
  height: 3.5rem;
  justify-content: space-between;
  min-width: 400px;

  #logo {
    color:${palette.lightCream};
    text-decoration: none;
  }

  #logo:hover {
    background-image: none;
    text-shadow:none;
  }

  li a {
    color: ${palette.lightCream};
    cursor: pointer;
    text-decoration: none;
  }

  li a:hover {
    background-image: linear-gradient(120deg, #F88D35 0%, #32A2BB 100%);
    background-repeat: no-repeat;
    background-size: 100% 0.2em;
    background-position: 0 100%;
    padding-bottom: 6px;
    text-shadow: 2px 2px 10px ${palette.black};
  }

  h4 {
    color: ${palette.lightCream};
    font-family: Jura;
    font-size: 1.1rem;
    margin-left: 10%;
    white-space: nowrap;
  }

  li {
    display: list-item;
    margin: .5rem;
  }

  ul.nav-links {
    color: ${palette.lightCream};
    display: flex;
    font-family: Tahoma, Geneva, Verdana, sans-serif;
    font-size: 1.5rem;
    list-style-type: none;
    margin: 0;
    padding-right: 3rem;
    text-align: center;
  }

  .active {
    background-image: linear-gradient(120deg, #F88D35 0%, #32A2BB 100%);
    background-repeat: no-repeat;
    background-size: 100% 0.2em;
    background-position: 0 100%;
    padding-bottom: 6px;
  }

  .chat-button {
    background-color: ${palette.mediumBlue};
    border-radius: 1px;
    box-shadow: 0 0 4px 0 rgba(0,0,0,0.50), 0 2px 0 0 #F89235;
    color: ${palette.lightCream};
    font-family: Jura;
    margin-right: 5%;
    min-width: 5rem;
    height: 100%;
    width: 5rem;
    text-align: center;
    z-index: 2;
  }

  .chat-button:hover {
    box-shadow: 0 0 8px 0 rgba(0,0,0,0.50), 0 4px 3px 0 #F89235;
  }

  .chat-button a {
    text-decoration: none;
  }
  .chat-button p {
    color: ${palette.lightCream};
    margin-top: 5%;
    padding-bottom: 15px;
    padding-top: 5px;
  }

  img {
    display: none;
    height: 30px;
    margin-left: auto;
    margin-right: auto;
    min-width: 50px;
  }

  @media (max-width: 768px) {
    img {
      display: flex;
    }
    .chat-button {
      min-width: 5rem;
      margin-right: 0;
    }
    ul.nav-links {
      display: none;
    }

    h4 {
      margin: 5%;
    }
  }

  @media (min-width: 450px and max-width: 768px) {
    .chat-button {
      margin-left: 5rem;
    }
    img {
      margin-right: 5%;
    }
  }
`

export default NavStyles
