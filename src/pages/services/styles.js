import styled from "@emotion/styled";
import { Typography, Box } from "@mui/material";
import BgImg from "../../assests/guide.jpg";

export const AboutHeading = styled(Typography)({
  fontFamily: "Poppins",
  fontSize: "70px",
  color: "#fff",
  fontWeight: "bold",
  lineHeight: "1",
});

export const AboutDesc = styled(Typography)({
  fontFamily: "Poppins",
  letterSpacing: "0.22px",
  fontSize: "22px",
  color: "#fff",
  lineHeight: "1.5",
  marginTop: "40px",
  marginBottom: "40px",
});

export const StyledBox = styled(Box)({
  padding: "200px 0px 150px 0px",
  backgroundColor: "#f54c0a",
  display: "flex",
  position: "relative",
});
export const MainBox = styled(Box)({
  position: "relative",
});
export const ServicesBox = styled(Box)({
  position: "relative",
  backgroundColor: "#fff",
  paddingLeft: "24px",
  paddingRight: "24px",
  paddingBottom: "24px",
  marginTop: "-65px",
});
export const GuidBox = styled(Box)({
  width: "100%",
  height: "20rem",
  display: "flex",
  alignItems: "flex-end",
  backgroundImage: `url(${BgImg})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
});

export const GuidContent = styled(Box)({
  position: "relative",
  backgroundColor: "#fff",
  marginLeft: "24px",
  marginRight: "24px",
  marginBottom: "24px",
  padding: "0 24px",
});
export const CardsBox = styled(Box)({
  position: "relative",
  padding: "24px 0",
});
export const ContactDetailsBox = styled(Box)({
  padding: "100px 0px 100px 0px",
  backgroundColor: "#f54c0a",
  display: "flex",
  position: "relative",
});