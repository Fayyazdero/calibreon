import React from "react";
import { Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import ProfileCard from "../../components/profileCard";
import Fayyaz from "./../../assests/user.jpeg";
import MD from "./../../assests/md.jpg";
import { SeeMore } from "./styles";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { Item } from "./styles";
import {
  Section,
  Heading,
  Discription,
  MainWrapper,
} from "../../components/common";

// see  more button
const ClickServices = () => {
  console.log("hello");
};

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
    <Section variant="primary">
      <Container>
        <Heading color="primary">Our Team</Heading>
        <Discription color="primary" align="center">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Zahid
        </Discription>
        <MainWrapper>
          <Grid container spacing={[4]}>
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
          </Grid>
          <SeeMore>
            <Typography onClick={ClickServices}>
              See more <ArrowForwardIcon />{" "}
            </Typography>
          </SeeMore>
        </MainWrapper>
      </Container>
    </Section>
  );
};

export default Team;
