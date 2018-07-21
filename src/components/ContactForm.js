import React from 'react';
import styled from 'styled-components';
import * as palette from '../components/color.js';
import { P } from './typography';
import ContactButton from './ContactButton';

const SubmitButton = ContactButton.extend`
  margin: 0 auto;
  display: flex;
`;

const Copy = P.extend`
  letter-spacing: .5px;
  line-height: 1.2rem;
  padding-bottom: 2rem;
  padding-top: 1rem;
`;
const Container = styled.div`
  sup {
    font-size: 2.5rem;
  }
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

  :focus::-webkit-input-placeholder {
    transition: color .6s ease;
    color: transparent;
  }

  border: 0;
  color: ${palette.lightBlue};
  outline: 0;
  background: transparent;
  border-bottom: 2px solid ${palette.grey};
  font-size: 1.3rem;
  width: 18rem;
  height: 2.5rem;
  margin-bottom: 3rem;
  margin-top: 1rem;
`;

const TextArea = styled.textarea`
  ::placeholder {
    font-size: 1rem;
    font-style: oblique;
  }
  :focus::-webkit-input-placeholder {
    transition: color .6s ease;
    color: transparent;
  }

  border: 0;
  background: transparent;
  color: ${palette.lightBlue};
  border-bottom: 2px solid ${palette.grey};
  font-size: 1.3rem;
  height: 3rem;
  margin-top: 1rem;
  outline: 0;
  width: 18rem;

`;

class ContactForm extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // handleSubmit(event) {
  //   event.preventDefault();

  //   fetch('https://electric-packet.glitch.me/', {
  //     method: 'POST',
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({})
  //   });
  // }
  render() {
    return (
      <Container className="animated fadeIn">
        <Label>Contact Me</Label>
        <Copy>Interested in hiring me as a consultant, freelancer, or an employee? Fantastic! I would love to hear
          about your project or company, and would be more than happy to discuss it. Please leave a detailed message
          and I'll get back to you as soon as I can. Thanks!
        </Copy>
        <Form method="POST" netlify>
          <Label for="name">Name<sup>&#8902;</sup></Label>
          <Input id="name" name="name" type="text" required placeholder="Your name&#8230;"></Input>
          <Label for="email">E-Mail<sup>&#8902;</sup></Label>
          <Input id="email" name="email" type="email" required placeholder="Your E-Mail&#8230; "></Input>
          <Label for="message">Message</Label>
          <TextArea id="message" name="message" type="text" placeholder="Your message for me&#8230; "></TextArea>
          <SubmitButton>Contact Me</SubmitButton>
        </Form>

      </Container>
    );
  }
}

export default ContactForm;