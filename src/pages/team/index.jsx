import { Container } from "@mui/system";
import React from "react";
import MainSection from "../../components/layout/mainSection";
import "./styles";
import { DepartmentHeading } from "./styles";

const Team = () => {
  return (
    <>
      <MainSection />
      <Container>
        <DepartmentHeading>Hello</DepartmentHeading>
      </Container>
    </>
  );
};

export default Team;
