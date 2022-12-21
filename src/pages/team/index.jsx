import React from "react";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import ProfileCard from "../../components/profileCard";
import Fayyaz from "./../../assests/user.jpeg";
import MD from "./../../assests/md.jpg";
import {
  Item,
  StyledBox,
  StyledGrid,
  TeamHeading,
  TeamHeadingWrapper,
  TeamText,
} from "./styles";

const Team = () => {
  const users = [
    {
      name: "Mian Dad",
      role: "Bookkeeper",
      img: MD,
      userDetails:
        "Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum",
    },
    {
      name: "Fayyaz",
      role: "Web Developer",
      img: Fayyaz,
      userDetails:
        "Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum",
    },
    {
      name: "Fayyaz",
      role: "Web Developer",
      img: Fayyaz,
      userDetails:
        "Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum",
    },
  ];

  return (
    <StyledBox>
      <Container>
        <TeamHeadingWrapper>
          <TeamHeading>Our Team</TeamHeading>
          <TeamText>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </TeamText>
        </TeamHeadingWrapper>
        <StyledGrid container spacing={[4]}>
          {users.map((item, key) => (
            <Grid item xs={12} sm={6} md={4} key={key}>
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
        </StyledGrid>
      </Container>
    </StyledBox>
  );
};

export default Team;
