import React from "react";

import { MainBox, ServicesItemWrapper } from "./styles";
import MainSection from "../../components/layout/mainSection";
import { Heading, Discription, MainWrapper } from "../../components/common";
import { Container, Grid } from "@mui/material";
import ServicesItem from "../../components/serviceItems";
import Contact from "../../components/contactForm";
import { useLocation } from "react-router-dom";

const ServicePage = () => {
  const { state } = useLocation();
  const data = [
    {
      servicesName: "Web development",
    },
    {
      servicesName: "Digital Marketing",
    },
    {
      servicesName: "Marketing Research",
    },
    {
      servicesName: "finance",
    },
  ];
  return (
    <MainBox>
      <MainSection serviceName={state.serviceName} />
      <MainWrapper>
        <Container>
          <Grid container spacing={[8]}>
            <Grid item xs={12} sm={6} md={7}>
              <Heading variant="h3">Business Growth Management</Heading>
              <Discription>
                Continually myocardinate holistic mindshare with client-based
                web services. Assertively e-enable catalysts for change before
                tested markets. Phosfluorescently maintain wireless scenarios
                after intermandated applications. Conveniently predominate
                revolutionary quality vectors through future-proof manufactured
                products. Enthusiastically transform distinctive collaboration.
              </Discription>
            </Grid>
            <Grid item xs={12} sm={6} md={5}>
              <ServicesItemWrapper>
                <Discription weight="bold">Our Services</Discription>
                {data.map((item, key) => (
                  <ServicesItem key={key} serviceName={item.servicesName} />
                ))}
              </ServicesItemWrapper>
            </Grid>
          </Grid>
        </Container>
      </MainWrapper>
      <Contact />
    </MainBox>
  );
};

export default ServicePage;
