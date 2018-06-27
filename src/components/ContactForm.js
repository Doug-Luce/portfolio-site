import React from 'react';
import styled from 'styled-components';
import * as palette from '../components/color.js';
import { H1, H2, H3, P } from './typography';
import ContactButton from './ContactButton';

const SubmitButton = ContactButton.extend`
  margin: 0 auto;
  display: flex;
`;

const Copy = P.extend`
  padding-bottom: 2rem;
`;
const Container = styled.div`
max-width: 18rem;
`;
const Form = styled.form`
  padding-bottom: 1rem;
`;
const Label = styled.label`
  font-weight: 500;
  color: ${palette.black};
  font-family: Tahoma, Geneva, Verdana, sans-serif;
  font-size: 29px;
  line-height: 41px;
  text-align: left;
`;
const Input = styled.input`

  ::placeholder {
  font-size: 1rem; 
  font-style: oblique;
  }

  border: 0;
  outline: 0;
  background: transparent;
  border-bottom: 2px solid ${palette.black};
  width: 18rem;
  height: 2.5rem;
  margin-bottom: 3rem;
`;

const TextArea = styled.textarea`
  ::placeholder {
    font-size: 1rem; 
    font-style: oblique;
  }

  border: 0;
  outline: 0;
  background: transparent;
  border-bottom: 2px solid ${palette.black};
  width: 18rem;
  height: 3rem;
`;


class ContactForm extends React.Component {
  render() {
    return (
      <Container>
        <Label>Contact Me</Label>
        <Copy>Thanks for taking the time to reach out to me. I'll get
              back to you as soon as possible.
        </Copy>
        <Form>
          <Label for="name">Name*</Label>
          <Input id="name" name="name" type="text" required placeholder="Your name&#8230;"></Input>
          <Label for="email">E-Mail*</Label>
          <Input id="email" name="email" type="email" required placeholder="Your E-Mail&#8230; "></Input>
          <Label for="message">Message</Label>
          <TextArea id="message" name="message" type="text" placeholder="Your message for me&#8230; "></TextArea>
        </Form>
        <SubmitButton>Contact Me</SubmitButton>
      </Container>
    );
  }
}

export default ContactForm;