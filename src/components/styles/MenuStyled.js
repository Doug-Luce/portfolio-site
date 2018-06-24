import styled from 'styled-components';
import * as palette from '../color';

const Menu = styled.div`
  background-color: ${palette.lightBlue};
  box-shadow: 3px 0 6px 0 #186678;
  height: 100vh;
  left: 0;
  position: fixed;
  top: 3.50rem;
  transform: ${props => props.open ? 'translate3d(-20vw, 0, 0);' : 'translate3d(-100vw, 0, 0);'};
  width: 100vw;
`;


export default Menu;
