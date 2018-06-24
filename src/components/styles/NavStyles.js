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

  ul {
    color: ${palette.lightCream};
    display: flex;
    font-family: Tahoma, Geneva, Verdana, sans-serif;
    font-size: 1.5rem;
    list-style-type: none;
    margin: 0;
    padding: 0;
    text-align: center;
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
  }

  .chat-button p {
    margin-top: 5%;
  }

  img {
    display: none;
    margin-right: 5%;
    min-width: 50px;
  }

   ${media.lessThan('medium')`
    /* screen width is less than 768px (medium) */
    img {
      display: flex;
    }
    .chat-button {
      min-width: 5rem;
    }
    ul {
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
  `}

`;

export default NavStyles;
