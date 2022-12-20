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
import { AboutHeading, StyledBox, AboutDesc, TestimonialsBox } from "./styles";

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
      <Team />
      <StyledBox>
        <Container>
          <AboutHeading>Our Services</AboutHeading>
          <AboutDesc>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </AboutDesc>
          <Grid container spacing={[3]}>
            {services.map((item, key) => (
              <Grid item xs={12} sm={6} md={4} key={key}>
                <ServicesCard
                  serviceImg={item.img}
                  serviceName={item.name}
                  serviceDetails={item.serviceDetails}
                />
              </Grid>
            ))}
          </Grid>
          <AboutDesc variant="span" onClick={ClickServices}>
            See more <ArrowForwardIcon />
          </AboutDesc>
        </Container>
      </StyledBox>
      <TestimonialsBox>
        <Container>
          <AboutHeading color="black">Testimonials</AboutHeading>
          <AboutDesc color="black">
            Some testimonials from our customers
          </AboutDesc>
          <Grid container spacing={[3]}>
            {testimonialsData.map((item, key) => (
              <Grid item xs={12} sm={6} md={4} key={key}>
                <TestimonialsCard
                  name={item.name}
                  comment={item.comment}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </TestimonialsBox>
      <Contact />
    </div>
  );
};

export default HomePage;
