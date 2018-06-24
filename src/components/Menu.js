import styled from 'styled-components';

const Menu = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  transform: ${props => props.open ? 'translate3d(-14vw, 0, 0);' : 'translate3d(-100vw, 0, 0);'};
  background-color: black;
  width: 100vw;
  height: 100vh;
`;

export default Menu;