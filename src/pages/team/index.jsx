import React from "react";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import Profile from "../../components/profile";
import Fayyaz from "./../../assests/user.jpeg";
import MD from "./../../assests/md.jpg";
import { Item, StyledBox } from "./styles";

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
        <Grid container spacing={4}>
          {users.map((item, key) => {
            return (
              <Grid item xs={12} sm={6} md={4}>
                <Item>
                  <Profile
                    userImg={item.img}
                    userName={item.name}
                    userRole={item.role}
                    userDetails={item.userDetails}
                  />
                </Item>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </StyledBox>
  );
};

export default Team;
