import React from "react";
import { Container, Box} from "@mui/material";
import {StyledTypo, ButtonWrapper} from './styles'
import StyledButton from "../../components/button";

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
            <StyledTypo variant="h5" sx={{ paddingTop:'65px'}}>
              {title}
            </StyledTypo>
            <ButtonWrapper>

            <StyledButton color='#f54c0a' variant='contained' text="Explore More!"/>
            <StyledButton variant='outlined' text='About Us!'/>
            </ButtonWrapper>

          </Container>
        </Box>
      </Box>
  );
};

export default Banner;
