import styled from "@emotion/styled";
import { Typography, Box } from "@mui/material";
import { sectionVarients } from "../theme/theme";

export const Section = styled(Box)((props) => ({
  height: "auto",
  padding: "80px 0px",
  display: "flex",
  alignItems: "center",
  backgroundColor:
    props.variant === "primary"
      ? sectionVarients.primary.backgroundColor
      : sectionVarients.white.backgroundColor,
  backgroundImage:
    props.variant === "primary" ? sectionVarients.primary.backgroundImage : "",
}));

export const Heading = styled(Typography)`
  font-family: Poppins;
  font-size: ${(props) =>
    props.variant === "h3" ? "40px" : props.variant === "h4" ? "32px" : "70px"};
  color: ${(props) =>
    props.color === "primary"
      ? sectionVarients.primary.color
      : sectionVarients.white.color};
  font-weight: bold;
  line-height: 1;
  text-align: ${(props) => (props.variant === "h4" ? "left" : "center")};
  margin-top: ${(props) => (props.variant === "h4" ? "2.5rem" : "")};
  margin-bottom: ${(props) => (props.variant === "h3" ? "24px" : "")};
`;

export const Discription = styled(Typography)((props) => ({
  fontFamily: "Poppins",
  letterSpacing: "0.22px",
  fontSize:
    props.title === "subheading"
      ? "24px"
      : props.title === "details"
      ? "16px"
      : "20px",
  color:
    props.color === "primary"
      ? sectionVarients.primary.color
      : sectionVarients.white.color,
  lineHeight: props.variant === "span" ? "2.5" : "1.5",
  marginTop:
    props.variant === "span"
      ? "40px"
      : props.title === "more"
      ? "40px"
      : "20px",
  marginBottom:
    props.variant === "span"
      ? "24px"
      : props.title === "subheading"
      ? "3rem"
      : props.title === "more"
      ? ""
      : "40px",

  textAlign:
    props.align === "center"
      ? "center"
      : props.align === "right"
      ? "right"
      : "left",
  padding: props.title === "details" ? "1rem" : "0",
  margin: props.title === "details" ? "0" : "",
  display: props.title === "more" ? "flex" : "",
  justifyContent: props.title === "more" ? "center" : "",
  alignItems: props.title === "more" ? "center" : "",
  cursor: props.title === "more" ? "pointer" : "",
  "&:hover": {
    color: props.title === "more" ? "#f54c0a" : "",
    fontWeight: props.title === "more" ? "bold" : "",
  },
  "& svg": {
    marginLeft: "0.6rem",
  },
}));
export const MainWrapper = styled(Box)`
  margin-top: 6rem;
`;
