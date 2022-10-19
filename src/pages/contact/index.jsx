import React from "react";
import { Container, Grid } from "@mui/material";
import {
  ContactHeading,
  ContactDesc,
  ContactWrapper,
  StyledBox,
  FormWrapper,
  ContactMessage,
  ContactText,
  InputWrapper,
  StyledInput,
  StyledTextArea,
  ButtonWrapper,

} from "./styles";
import Button from "../../components/button";

const Contact = () => {
  return (
    <StyledBox>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <ContactWrapper>
              <ContactHeading variant="h2">
                Contact <br /> Us
              </ContactHeading>
              <ContactDesc>
                Get on a call. Talk to an expert. Get your (automated,
                done-for-you) accounting solution.
              </ContactDesc>
              <Button variant="outlined">Schedule a Call</Button>
            </ContactWrapper>
          </Grid>
          <Grid item xs={12} md={6}>
            <FormWrapper>
              <ContactMessage variant="h5">
                We'd love to hear from you
              </ContactMessage>
              <ContactText variant="p">
                Please fill out the form below and we will get in touch with you
                shortly.
              </ContactText>
              <InputWrapper>
                    <StyledInput placeholder="Name"/>
                    <StyledInput placeholder="Email Adress"/>
                    <StyledTextArea aria-label="Hello" placeholder="Name" minRows={5}/>
              </InputWrapper>
              <ButtonWrapper>
                  <Button variant='contained'>Send Message</Button>
              </ButtonWrapper>
            </FormWrapper>
          </Grid>
        </Grid>
      </Container>
    </StyledBox>
  );
};

export default Contact;
