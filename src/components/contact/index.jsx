import React from "react";
import { Container, Grid, Box, Input } from "@mui/material";
import {
  ContactHeading,
  ContactDesc,
  ContactWrapper,
  StyledButton,
  StyledBox,
  FormWrapper,
  ContactMessage,
  ContactText,
  InputWrapper,
  StyledInput,
  StyledTextArea,
  ButtonWrapper,
    SubmitButton

} from "./styles";

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
              <StyledButton variant="contained">Schedule a Call</StyledButton>
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

              <SubmitButton variant="contained">Send Message</SubmitButton>
              </ButtonWrapper>
            </FormWrapper>
          </Grid>
        </Grid>
      </Container>
    </StyledBox>
  );
};

export default Contact;
