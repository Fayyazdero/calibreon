import React from "react";
import { Container, Breadcrumbs, Typography, Link } from "@mui/material";
import { useLocation } from "react-router-dom";
import { AboutHeading, MainBox, Details } from "./styles";

const MainSection = () => {
  const location = useLocation();
  const name = location.pathname.replace("/", "");
  return (
    <MainBox>
      <Container>
        <AboutHeading>{name}</AboutHeading>
        <Details>
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/">
              Home
            </Link>
            <Typography color="text.primary">{name}</Typography>
          </Breadcrumbs>
        </Details>
      </Container>
    </MainBox>
  );
};

export default MainSection;
