import React from "react";
import { Container, Grid } from "@mui/material";
import {
  MissionHeading,
  StyledBox,
  MissionDesc,
  ImagesBox,
  TeamBox,
  TeamSubHeading,
  TeamCards,
} from "./styles";
import Img1 from "../../assests/about-us-img-01.jpg";
import Img2 from "../../assests/about-us-img-02.jpg";
import Img3 from "../../assests/about-us-img-03.jpg";
import TeamCard from "../../components/teamCard";
import MD from "./../../assests/team.jpg";

const Mission = () => {
  const users = [
    {
      name: "Mian Dad",
      role: "Bookkeeper",
      img: MD,
      userDetails:
        "With over 15 years of experience in senior accounting and finance roles, Jenny took the leap to entrepreneurship and founded Fint.Cloud in 2017. Between spending time with her two lovely pups, Millie and Hiro, rock climbing (specific place you rock climbed), and consulting CFOs around the world, she still finds the time to run a financial services company that improves the bottom lines of clients around the world.",
    },
    {
      name: "Fayyaz",
      role: "Web Developer",
      img: MD,
      userDetails:
        "With over 15 years of experience in senior accounting and finance roles, Jenny took the leap to entrepreneurship and founded Fint.Cloud in 2017. Between spending time with her two lovely pups, Millie and Hiro, rock climbing (specific place you rock climbed), and consulting CFOs around the world, she still finds the time to run a financial services company that improves the bottom lines of clients around the world.",
    },
    {
      name: "Fayyaz",
      role: "Web Developer",
      img: MD,
      userDetails:
        "With over 15 years of experience in senior accounting and finance roles, Jenny took the leap to entrepreneurship and founded Fint.Cloud in 2017. Between spending time with her two lovely pups, Millie and Hiro, rock climbing (specific place you rock climbed), and consulting CFOs around the world, she still finds the time to run a financial services company that improves the bottom lines of clients around the world.",
    },
  ];
  return (
    <StyledBox>
      <Container>
        <Grid container spacing={[4]}>
          <Grid item xs={12} sm={12} md={6}>
            <MissionHeading>Our Mission is Clear</MissionHeading>
            <MissionDesc>
              We’re a team of dedicated, perceptive experts in the field of
              finances and accounting and we use cloud technology to automate
              your accounting, streamline your bookkeeping, and help your
              business grow.
            </MissionDesc>
          </Grid>
        </Grid>
        <ImagesBox>
          <img src={Img2} alt="img2" />
          <div className="absolatedImage">
            <img src={Img1} alt="img1" />
            <img src={Img3} alt="img3" />
          </div>
        </ImagesBox>
        <TeamBox>
          <TeamSubHeading>WE ARE HERE FOR YOU</TeamSubHeading>
          <MissionHeading>Meet the Co-Founders</MissionHeading>
        </TeamBox>
        <TeamCards>
          <Grid container spacing={[2]}>
            {users.map((item, key) => (
              <Grid item xs={12} sm={6} md={4} key={key}>
                <TeamCard
                  userImg={item.img}
                  userName={item.name}
                  userRole={item.role}
                  userDetails={item.userDetails}
                />
              </Grid>
            ))}
          </Grid>
        </TeamCards>
      </Container>
    </StyledBox>
  );
};

export default Mission;
