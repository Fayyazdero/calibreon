import React from "react";
import { Box, Grid } from "@mui/material";
import { Container } from "@mui/system";
import Profile from "../../components/profile";
import Fayyaz from "./../../assests/user.jpeg";
import { Item } from "./styles";

const Team = () => {
  const users = [
    {
      name: "Fayyaz Karim",
      role: "Web Developer",
      img: Fayyaz,
    },
    {
      name: "Fayyaz",
      role: "Web Developer",
      img: Fayyaz,
    },
    {
      name: "Fayyaz",
      role: "Web Developer",
      img: Fayyaz,
    },
  ];

  return (
    <Box>
      <Container>
        <Grid container spacing={2}>
          {users.map((item, key) => {
            return (
              <Grid item xs={12} sm={6} md={4}>
                <Item>
                  <Profile
                    userImg={item.img}
                    userName={item.name}
                    userRole={item.role}
                  />
                </Item>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default Team;
