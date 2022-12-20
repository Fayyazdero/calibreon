import styled from "@emotion/styled";
import { Typography, Box } from "@mui/material";

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
  
});
export const ImgBox = styled(Box)({
  "& img": {
    width: "100%",
    height: "100%",
  },
});
