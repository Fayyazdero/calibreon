import Slider from "../../components/slider";
import { useNavigate } from "react-router-dom";
import Contact from "../contact";
import Team from "../team";
import Ideate from "../../assests/ideate.png";
import Business from "../../assests/business.png";
import Marketing from "../../assests/marketing.png";
import ServicesCard from "../../components/servicesCard";
import TestimonialsCard from "../../components/testimonialsCard";
import { Container, Grid } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {
  Section,
  Heading,
  Discription,
  MainWrapper,
} from "../../components/common";

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
  const ClickServices = () => {
    navigate("/services");
  };
  return (
    <div>
      <Slider />
      <Section>
        <Container>
          <Heading>Our Services</Heading>
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
      <Team />
      <Section>
        <Container>
          <Heading>Testimonials</Heading>
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
