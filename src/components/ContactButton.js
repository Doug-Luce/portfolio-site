import styled from 'styled-components';
import * as palette from '../components/color.js';

const ContactButton = styled.button`
  /* background-image: radial-gradient(48% -44%, #32A2BB 59%, #1787A0 100%); */
  background-image: ${palette.navGradient};
  border-color: ${palette.orange};
  box-shadow: 0 2px 0 0 ${palette.lightBlue};
  border-radius: 4px;
  color: ${palette.lightCream};
  outline: none;
  font-family:  Tahoma, Geneva, Verdana, sans-serif;
  font-size: 18px;
  font-weight: 500;
  padding: .5rem 2rem .5rem 2rem;
  text-align: center;
  text-shadow: 0 1px 1px rgba(0,0,0,0.50);

  /* &&:hover {
    cursor: pointer;
    box-shadow: 2px 2px 8px ${palette.lightBlue};
    transition: all .4s ease;
  }

  &&:active {
    box-shadow: none;
    box-shadow:         inset 0 0 2px ${palette.black};
    transform: translate(0, 7px);
  } */
`;

export default ContactButton;
