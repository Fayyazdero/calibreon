import React from "react";
import { Container, Breadcrumbs, Typography, Link } from "@mui/material";
import { useLocation } from "react-router-dom";
import { AboutHeading, MainBox, Details } from "./styles";

const MainSection = (props) => {
  const location = useLocation();
  const name = props.serviceName
    ? props.serviceName
    : location.pathname.replace("/", "");
  return (
    <MainBox>
      <Container>
        <AboutHeading>{name}</AboutHeading>
        <Details>
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/">
              Home
            </Link>
            <Typography color="text.primary">
              {" "}
              {props.serviceName ? "Services / " + props.serviceName : name}
            </Typography>
          </Breadcrumbs>
        </Details>
      </Container>
    </MainBox>
  );
};

export default MainSection;
