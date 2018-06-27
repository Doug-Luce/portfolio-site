import styled from 'styled-components';
import * as palette from '../color';


// TODO Fix issue when sliding up on mobile shows gap
// between header and menu
const Menu = styled.div`
  background-color: ${palette.lightBlue};
  box-shadow: 3px 0 6px 0 #186678;
  height: 100vh;
  left: 0;
  position: fixed;
  top: 3.5rem;
  /* This will hide the slideout menu or show it depending on the state passed in as props */
  transform: ${props => props.toggle ? 'translate3d(-20vw, 0, 0);' : 'translate3d(-110vw, 0, 0);'};
  width: 100vw;
`;

export default Menu;
