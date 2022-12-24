import React from "react";
import {
  Container,
  Grid,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import {
  UserTitle,
  StyledBox,
  UserContent,
  UserImage,
  UserData,
  AboutDesc,
  UserSocialIcons,
  MainBox,
  DiscriptionBox,
  CustomizeAccordion,
  ContactDetailsBox,
} from "./styles";
import { useLocation } from "react-router-dom";
import {
  Instagram,
  LinkedIn,
  Twitter,
  Facebook,
  Phone,
  Mail,
} from "@mui/icons-material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const PersonalProfile = () => {
  const { state } = useLocation();
  return (
    <MainBox>
      <StyledBox>
        <Container>
          <Grid container spacing={[4]} alignItems="center">
            <Grid item xs={12} sm={8} md={8}>
              <UserContent>
                <UserImage src={state.userImg} alt="user" />
                <UserData>
                  <UserTitle>{state.userName}</UserTitle>
                  <AboutDesc color="#ffffff" fontSize="36px">
                    {state.userRole}
                  </AboutDesc>
                </UserData>
              </UserContent>
            </Grid>
            <Grid item xs={12} sm={4} md={4}></Grid>
          </Grid>
        </Container>
      </StyledBox>
      <DiscriptionBox>
        <Container>
          <AboutDesc>
            {state.userName} has a diversified experience of over 25 years
            within and outside profession in Pakistan and East Africa. He is a
            key member of audit and assurance practice of Islamabad and heads
            the Clients & Market and Human Resource functions of Islamabad
            practice and is the lead engagement partner of key Islamabad audit
            clients.
            <br /> <br /> {state.userName} led team to carry out listing of
            Exchangeable Bonds of the largest oil & gas company in Pakistan at
            London and Singapore stock exchanges and was a key member of listing
            the Global Depository Shares of the same company at the London stock
            exchange.
          </AboutDesc>
        </Container>
      </DiscriptionBox>

      <Container>
        <CustomizeAccordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Area of Experties</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.ss
            </Typography>
          </AccordionDetails>
        </CustomizeAccordion>
      </Container>
      <ContactDetailsBox>
        <Container>
          <UserSocialIcons>
            <LinkedIn />
            <Phone />
            <Mail />
            <Instagram />
            <Facebook />
            <Twitter />
          </UserSocialIcons>
        </Container>
      </ContactDetailsBox>
    </MainBox>
  );
};

export default PersonalProfile;
