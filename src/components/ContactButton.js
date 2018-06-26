import styled from 'styled-components';
import * as palette from '../components/color.js';

const ContactButton = styled.button`
  /* background-image: radial-gradient(48% -44%, #32A2BB 59%, #1787A0 100%); */
  background-image: ${palette.navGradient};
  border-color: ${palette.orange};
  box-shadow: 0 2px 0 0 #386C89;
  border-radius: 4px;
  color: ${palette.lightCream};
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 18px;
  font-weight: 500;
  padding: .5rem 2rem .5rem 2rem;
  text-align: center;
  text-shadow: 0 1px 1px rgba(0,0,0,0.50);
`;

export default ContactButton;
