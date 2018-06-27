import React from "react";
import {  H2, H3, P } from '../components/typography';
import ContactCard from '../components/ContactCard';
import ContactStyles from './styles/ContactStyles';
import ContactForm from '../components/ContactForm';

const Contact = (props) => (
  <div>
    {/* <ContactCard /> */}
    <ContactForm />
  </div>
);

export default Contact;