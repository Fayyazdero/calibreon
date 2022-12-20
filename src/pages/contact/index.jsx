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
  ContactDetails,
  ContactItem,
  IconsWrapper,
} from "./styles";
import Button from "../../components/button";
import Phone from "../../components/svgs/Phone";
import Mail from "../../components/svgs/Mail";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SendIcon from "@mui/icons-material/Send";
import { Instagram, LinkedIn, Twitter, Facebook } from "@mui/icons-material";

const Contact = () => {
  const contactDetails = [
    {
      icon: <LocationOnIcon />,
      info: "Near Heli Chowk Zulfiqarabad Gilgit",
    },
    {
      icon: <Phone height="30px" color="#fff" />,
      info: "(647) 749-7224",
    },
    {
      icon: <Mail height="30px" color="#fff" />,
      info: "contact@calibreoninternational.com",
    },
  ];
  return (
    <StyledBox>
      <Container>
        <ContactHeading variant="h2">Get in Touch</ContactHeading>
        <ContactDesc title="subheading">We are here to help you</ContactDesc>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <ContactWrapper>
              <ContactHeading variant="h4">Contact Information</ContactHeading>
              <ContactDetails>
                {contactDetails.map((item, index) => (
                  <ContactItem key={index}>
                    {item.icon}
                    <ContactDesc>{item.info}</ContactDesc>
                  </ContactItem>
                ))}
              </ContactDetails>
              <IconsWrapper>
                <Facebook />
                <LinkedIn />
                <Twitter />
                <Instagram />
              </IconsWrapper>
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
                <StyledInput placeholder="Name" />
                <StyledInput placeholder="Email Adress" />
                <StyledTextArea
                  aria-label="Hello"
                  placeholder="Message"
                  minRows={5}
                />
              </InputWrapper>
              <ButtonWrapper>
                <Button variant="contained">
                  Send Message <SendIcon />
                </Button>
              </ButtonWrapper>
            </FormWrapper>
          </Grid>
        </Grid>
      </Container>
    </StyledBox>
  );
};

export default Contact;
