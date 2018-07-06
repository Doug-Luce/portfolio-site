import React from "react";
import ContactCard from '../components/ContactCard';
import ContactForm from '../components/ContactForm';
import styled from 'styled-components';

const Div = styled.section`
  display:flex;
  flex-direction:row;
  justify-content: space-evenly;
  padding-top: 3rem;
  width: 100%;

  @media (max-width: 768px) {
    align-items: center;
    flex-direction:column;
    section {
      margin-bottom: 4rem;
    }
  }
`;

const Contact = (props) => (
  <Div>
    <ContactCard />
    <ContactForm />
  </Div>
);

export default Contact;