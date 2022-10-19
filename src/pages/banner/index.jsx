import React from "react";
import { Container, Box } from "@mui/material";
import { StyledTypo, ButtonWrapper } from "./styles";
import Button from "../../components/button";

const Banner = ({ title, imgLink }) => {
  let backgroundImg = {
    width: "100%",
    height: "500px",
    backgroundImage: `url(${imgLink})`,
  };
  return (
    <Box style={backgroundImg}>
      <Box>
        <Container>
          <StyledTypo variant="h5" sx={{ paddingTop: "65px" }}>
            {title}
          </StyledTypo>
          <ButtonWrapper>
            <Button variant='contained'>Explore More!</Button>
            <Button variant='outlined'>About Us</Button>
          </ButtonWrapper>
        </Container>
      </Box>
    </Box>
  );
};

export default Banner;
