import styled from "@emotion/styled";
import { Typography, Box } from "@mui/material";

export const AboutHeading = styled(Typography)`
  font-family: Poppins;
  font-size: ${(props) => (props.variant === "h3" ? "40px" : "70px")};
  color: ${(props) => (props.color === "black" ? "#000" : "#fff")};
  font-weight: bold;
  line-height: 1;
  margin-bottom: 24px;
  text-align: center;
`;

export const AboutDesc = styled(Typography)`
  font-family: Poppins;
  letter-spacing: 0.22px;
  font-size: 22px;
  color: ${(props) => (props.color === "black" ? "#000" : "#fff")};
  line-height: 1.5;
  margin-top: ${(props) => (props.variant === "span" ? "40px" : "")};
  margin-bottom: ${(props) => (props.variant === "span" ? "" : "40px")};
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledBox = styled(Box)({
  padding: "100px 0px 100px 0px",
  backgroundColor: "#f54c0a",
  display: "flex",
  position: "relative",
  "& span": {
    cursor: "pointer",
    "& svg": {
      marginLeft: "0.6rem",
    },
  },
});
export const TestimonialsBox = styled(Box)({
  padding: "100px 0px 100px 0px",
  backgroundColor: "#ffffff",
  position: "relative",
  textAlign: "center",
});
