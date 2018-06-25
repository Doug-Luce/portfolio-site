import styled from 'styled-components';
import * as palette from '../color';
import media from 'styled-media-query';

const NavStyles = styled.nav`
  align-items: center;
  height: 3.5rem;
  background-image: ${palette.navGradient};
  display: flex;
  justify-content: space-between;
  min-width: 375px;

  #logo {
    color:${palette.lightCream};
    text-decoration: none;
  }

  #logo:hover {
    text-shadow:none;
    background-image: none;
  }

  li a {
    color: ${palette.lightCream};
    cursor: pointer;
    text-decoration: none;
  }

  li a:hover {
    text-shadow: 2px 2px 10px ${palette.black};
    background-image: linear-gradient(120deg, #F88D35 0%, #32A2BB 100%);
    background-repeat: no-repeat;
    background-size: 100% 0.2em;
    background-position: 0 100%;
    padding-bottom: 6px;
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
    padding: 0;
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

   ${media.lessThan('medium')`
    /* screen width is less than 768px (medium) */
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
  `}

  ${media.between('small', 'medium')`
    /* screen width is between 768px (medium) and 1170px (large) */
    .chat-button {
      margin-left: 5rem;
    }
    img {
      margin-right: 5%;
    }
  `}

`;

export default NavStyles;
