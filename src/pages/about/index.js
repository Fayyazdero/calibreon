import React from "react";
import { Container, Grid } from "@mui/material";
import Mission from "../../components/mission";

import { AboutHeading, StyledBox, AboutDesc, ImgBox, MainBox } from "./styles";

const About = () => {
  return (
    <MainBox>
      <StyledBox>
        <Container>
          <Grid container spacing={[4]}>
            <Grid item xs={12} sm={12} md={8}>
              <AboutHeading>About us</AboutHeading>
              <AboutDesc>
                We are an online accounting and bookkeeping firm that eliminates
                financial frustration while you run your successful business!
              </AboutDesc>
            </Grid>
            <Grid item xs="none" sm="none" md={4}>
              <ImgBox
                sx={{
                  display: { xs: "none", md: "flex" },
                }}
              >
                <img
                  src={
                    "https://fint.cloud/wp-content/uploads/2021/04/Asset-4.png"
                  }
                  alt="overlay"
                />
              </ImgBox>
            </Grid>
          </Grid>
        </Container>
      </StyledBox>
      <Mission />
    </MainBox>
  );
};

export default About;
