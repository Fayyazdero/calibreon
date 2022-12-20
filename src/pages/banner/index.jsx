import React from "react";
import { Container, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { StyledTypo, ButtonWrapper } from "./styles";
import Button from "../../components/button";

const Banner = ({ key, item }) => {
  const navigate = useNavigate();
  let backgroundImg = {
    width: "100%",
    height: "500px",
    backgroundImage: `url(${item.imgLink})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    padding: "150px 0px 90px 0px",
  };
  const onClickAboutus = () => {
    navigate("/about");
  };
  const onClickServices = () => {
    navigate("/services");
  };
  return (
    <Box style={backgroundImg} key={key}>
      <Box>
        <Container>
          <StyledTypo variant="h5" sx={{ paddingTop: "65px" }}>
            {item.title}
          </StyledTypo>
          <ButtonWrapper>
            <Button
              variant="contained"
              sx={{ mr: 10 }}
              onClick={onClickServices}
            >
              Explore More!
            </Button>
            <Button variant="outlined" onClick={onClickAboutus}>
              About Us
            </Button>
          </ButtonWrapper>
        </Container>
      </Box>
    </Box>
  );
};

export default Banner;
