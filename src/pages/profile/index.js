import React from "react";
import { Container, Grid } from "@mui/material";

import { AboutHeading, StyledBox, AboutDesc, MainBox } from "./styles";

const About = () => {
  return (
    <MainBox>
      <StyledBox>
        <Container>
          <Grid container spacing={[4]}>
            <Grid item xs={12} sm={12} md={8}>
              <AboutHeading>About</AboutHeading>
              <AboutDesc>
                We are an online accounting and bookkeeping firm that eliminates
                financial frustration while you run your successful business!
              </AboutDesc>
            </Grid>           
          </Grid>
        </Container>
      </StyledBox>
    </MainBox>
  );
};

export default About;
