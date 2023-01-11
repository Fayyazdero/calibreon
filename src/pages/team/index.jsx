import { Container } from "@mui/system";
import React from "react";
import MainSection from "../../components/layout/mainSection";
import "./styles";
import { DepartmentHeading, Item, TeamMembersWrapper } from "./styles";
import Slider from "../../components/slider";
import ProfileCard from "../../components/profileCard";
import { Grid } from "@mui/material";
import { teamMembers } from "../Data/users";
const Team = () => {
  return (
    <>
      <MainSection />
      <Container>
        <DepartmentHeading>Bookeeping & Accounts</DepartmentHeading>
        <Slider arrows={true} slidesToShow={1}>
          <TeamMembersWrapper>
            <Grid container spacing={[2]}>
              {teamMembers.map((item) => (
                <Grid item xs={12} sm={4} md={3}>
                  <Item>
                    <ProfileCard
                      userImg={item.img}
                      userName={item.name}
                      userRole={item.role}
                      userDetails={item.userDetails}
                    />
                  </Item>
                </Grid>
              ))}
            </Grid>
          </TeamMembersWrapper>
        </Slider>
        <DepartmentHeading>Amazon FBA & Digital Marketing</DepartmentHeading>
        <Slider arrows={true} slidesToShow={1}>
          <TeamMembersWrapper>
            <Grid container spacing={[2]}>
              {teamMembers.map((item) => (
                <Grid item xs={12} sm={4} md={3}>
                  <Item>
                    <ProfileCard
                      userImg={item.img}
                      userName={item.name}
                      userRole={item.role}
                      userDetails={item.userDetails}
                    />
                  </Item>
                </Grid>
              ))}
            </Grid>
          </TeamMembersWrapper>
        </Slider>
      </Container>
    </>
  );
};

export default Team;
