import styled from "@emotion/styled";
import { Typography, Box } from "@mui/material";
import BgImg from "../../assests/guide.jpg";

export const AboutHeading = styled(Typography)`
  font-family: Poppins;
  font-size: ${(props) => (props.variant === "h3" ? "40px" : "70px")};
  color: #fff;
  font-weight: bold;
  line-height: 1;
  margin-bottom: ${(props) => (props.variant === "h3" ? "24px" : "")}
`;

export const AboutDesc = styled(Typography)`
  font-family: Poppins;
  letter-spacing: 0.22px;
  font-size: 22px;
  color: #fff;
  line-height: ${(props) => (props.variant === "span" ? "2.5" : "1.5")};
  margin-top: 40px;
  margin-bottom: ${(props) => (props.variant === "span" ? "24px" : "40px")};
`;

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
export const Details = styled(Box)({
  textAlign: "center",
});
export const ContactDetailsBox = styled(Box)({
  padding: "100px 0px 100px 0px",
  backgroundColor: "#f54c0a",
  display: "flex",
  alignItems: "center",
  position: "relative",
});
