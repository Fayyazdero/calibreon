import Slider from "../../components/slider";
import { useNavigate } from "react-router-dom";
import Contact from "../../components/contactForm";
import ProfileCard from "../../components/profileCard";
import Ideate from "../../assests/ideate.png";
import Business from "../../assests/business.png";
import Marketing from "../../assests/marketing.png";
import ServicesCard from "../../components/servicesCard";
import TestimonialsCard from "../../components/testimonialsCard";
import { Container, Grid, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Fayyaz from "./../../assests/user.jpeg";
import MD from "./../../assests/md.jpg";
import {
  Section,
  Heading,
  Discription,
  MainWrapper,
} from "../../components/common";
import { SeeMore, Item } from "./styles";

const HomePage = () => {
  const navigate = useNavigate();
  const services = [
    {
      name: "Ideate",
      img: Ideate,
      serviceDetails:
        "We help you develop creative ideas so that your business can grow more rapidly",
    },
    {
      name: "Business Growth",
      img: Business,
      active: true,
      serviceDetails:
        "We also provide services by providing input for your business growth",
    },
    {
      name: "Degital Marketing",
      img: Marketing,
      serviceDetails:
        "We also help you market your products through an online marketplace",
    },
  ];
  const testimonialsData = [
    {
      name: "Ronald Richards",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    },
    {
      name: "Guy Hawkins",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    },
    {
      name: "Kristin Watsons",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    },
    {
      name: "Robert Fox",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    },
    {
      name: "Savannah Nguyen",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    },
    {
      name: "Courtney Henry",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    },
  ];
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
  const ClickServices = () => {
    navigate("/services");
  };
  return (
    <div>
      <Slider />
      <Section>
        <Container>
          <Heading align="center">Our Services</Heading>
          <Discription align="center">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </Discription>
          <MainWrapper>
            <Grid container spacing={[3]}>
              {services.map((item, key) => (
                <Grid item xs={12} sm={6} md={4} key={key}>
                  <ServicesCard
                    serviceImg={item.img}
                    serviceName={item.name}
                    serviceDetails={item.serviceDetails}
                    active={item.active}
                  />
                </Grid>
              ))}
            </Grid>
            <Discription title="more" onClick={ClickServices}>
              See more <ArrowForwardIcon />
            </Discription>
          </MainWrapper>
        </Container>
      </Section>
      <Section variant="primary">
        <Container>
          <Heading align="center" color="primary">Our Team</Heading>
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
      <Section>
        <Container>
          <Heading align="center">Testimonials</Heading>
          <Discription align="center">
            Some testimonials from our customers
          </Discription>
          <MainWrapper>
            <Grid container spacing={[8]}>
              {testimonialsData.map((item, key) => (
                <Grid item xs={12} sm={6} md={4} key={key}>
                  <TestimonialsCard name={item.name} comment={item.comment} />
                </Grid>
              ))}
            </Grid>
          </MainWrapper>
        </Container>
      </Section>
      <Contact />
    </div>
  );
};

export default HomePage;
