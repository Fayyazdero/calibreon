import styled from "@emotion/styled";
import { Typography, Box } from "@mui/material";

export const AboutHeading = styled(Typography)((props) => ({
  position: "relative",
  fontFamily: "Poppins",
  fontSize: "70px",
  color: "#fff",
  fontWeight: "bold",
  lineHeight: 1,
  margin: "20px 0",
  textAlign: "center",
  textTransform: "capitalize",
  "&:before": {
    content: `' '`,
    position: "absolute",
    display: "block",
    top: 0,
    backgroundColor: "#fff",
    borderRadius: "5px 5px 5px 5px !important",
    width: "3px",
    height: "40px",
    marginTop: "-57px",
    left: "50%",
  },
}));

export const MainBox = styled(Box)({
  paddingTop: "105px",
  paddingBottom: "70px",
  backgroundColor: "#f54c0a",
  backgroundImage: "linear-gradient(74deg, #f54c0a 40%, #e7cf285c 100%)",
  display: "flex",
  alignItems: "center",
  position: "relative",
});

export const Details = styled(Box)({
  textAlign: "center",
  "& ol": {
    justifyContent: "center",
  },
  "& li": {
    color: "#d6d6d7",
    "& a": {
      fontSize: "16px",
      "&:hover": {
        color: "#fff",
        textDecoration: "none",
        fontWeight: "bold",
      },
    },
  },
  "& p": {
    color: "#fff",
    fontSize: "16px",
    fontWeight: "bold",
    textTransform: "capitalize",
  },
});
