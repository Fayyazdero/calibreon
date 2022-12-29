import styled from "@emotion/styled";
import { Typography, Box } from "@mui/material";

export const MapSection = styled(Box)({
  backgroundColor: "#fff",
  display: "flex",
  alignItems: "center",
  "& iframe": {
    width: "100%",
    height: "30rem",
  },
  "@media (max-width: 700px)": {
    flexWrap: "wrap",
  },
});
export const Wrapper = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignISStems: "center",
  padding: "61px",
  height: "100%",
});
export const Title = styled(Typography)({
  fontFamily: "Poppins",
  fontSize: "44px",
  color: "#000000",
  fontWeight: "bold",
  lineHeight: "1",
});
export const Para = styled(Typography)({
  fontFamily: "Poppins",
  letterSpacing: "0.22px",
  fontSize: "15px",
  color: "#748494",
  lineHeight: "1.5",
  marginTop: "40px",
  marginBottom: "40px",
});
