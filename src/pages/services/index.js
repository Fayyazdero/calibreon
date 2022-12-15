import React from "react";
import { Container, Grid } from "@mui/material";
import MD from "../../assests/team.jpg";
import { useNavigate } from "react-router-dom";
import {
  AboutHeading,
  StyledBox,
  AboutDesc,
  MainBox,
  ServicesBox,
  GuidBox,
  GuidContent,
  CardsBox,
  ContactDetailsBox,
} from "./styles";
import ServicesCard from "../../components/servicesCard";
import Viewed from "../../components/viewItems";
import Button from "../../components/button";

const Services = () => {
  const navigate = useNavigate();
  let backgroundImg = {
    width: "100%",
    backgroundImage: `url(https://assets.kpmg/is/image/kpmg/man-and-woman-discussing-something-on-laptop-banner:cq5dam.web.1400.500`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
  };
  const services = [
    {
      name: "Audit & Assurance",
      img: MD,
      serviceDetails:
        "Financial statement audits give assurance over information used by investors and the capital markets.",
    },
    {
      name: "Audit & Assurance",
      img: MD,
      serviceDetails:
        "Financial statement audits give assurance over information used by investors and the capital markets.",
    },
    {
      name: "Audit & Assurance",
      img: MD,
      serviceDetails:
        "Financial statement audits give assurance over information used by investors and the capital markets.",
    },
  ];
  const onClickContact = () => {
    navigate("/contact");
  };
  return (
    <MainBox>
      <StyledBox style={backgroundImg}>
        <Container>
          <Grid container spacing={[4]}>
            <Grid item xs={12} sm={12} md={8}>
              <AboutHeading>Our Services</AboutHeading>
              <AboutDesc>
                KPMG combines our multi-disciplinary approach with deep,
                practical industry knowledge to help clients meet challenges and
                respond to opportunities.
              </AboutDesc>
            </Grid>
            <Grid item xs="none" sm="none" md={4}></Grid>
          </Grid>
        </Container>
      </StyledBox>
      <Container>
        <ServicesBox>
          <CardsBox>
            <Grid container spacing={[3]}>
              {services.map((item, key) => (
                <Grid item xs={12} sm={6} md={4} key={key}>
                  <ServicesCard
                    serviceImg={item.img}
                    serviceName={item.name}
                    serviceDetails={item.serviceDetails}
                  />
                </Grid>
              ))}
            </Grid>
          </CardsBox>
          <Grid container spacing={[1]}>
            <Grid item xs={12} sm={6} md={6}>
              <GuidBox>
                <GuidContent>
                  <h3>Forensics</h3>
                  <p>
                    Assisting clients in achieving the highest levels of
                    business integrity through the prevention, detection, and
                    investigation of fraud and misconduct.
                  </p>
                </GuidContent>
              </GuidBox>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <Viewed />
            </Grid>
          </Grid>
        </ServicesBox>
      </Container>
      <ContactDetailsBox>
        <Container>
          <AboutDesc>Let's Chat</AboutDesc>
          <Button onClick={onClickContact}>Contact Us</Button>
        </Container>
      </ContactDetailsBox>
    </MainBox>
  );
};

export default Services;
