import styled from 'styled-components';
import * as palette from '../color';

const NavStyles = styled.nav`
  height: 4.75rem;
  background-image: ${palette.navGradient};

  h4 {
    font-family: Jura;
    font-size: 1.8rem;
    width: 10rem;
    word-wrap: break-word;
    color: ${palette.lightCream};
  }
`;

//Test comment for Git

export default NavStyles;
