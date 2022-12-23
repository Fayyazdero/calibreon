import React from "react";
import MainSection from "../../components/layout/mainSection";
import ContactForm from "../../components/contactForm";
import { Container } from "@mui/material";
import { Wrapper, Title, Para, MapSection } from "./styles";

const Contact = () => {
  return (
    <>
      <MainSection />
      <MapSection>
        <Wrapper>
          <Title>Get in Touch</Title>{" "}
          <Para>
            Send your requirements for a website, we will research your
            specification and competitors, create a prototype of the website for
            free and sed a result to you! It will be something amazing!
          </Para>
        </Wrapper>
        <iframe
          className="gmap_iframe"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Calibreon International, Caliberon INternational, Gilgit&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </MapSection>
      <ContactForm />
    </>
  );
};

export default Contact;
