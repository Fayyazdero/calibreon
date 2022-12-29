import styled from "@emotion/styled";
import { Box } from "@mui/material";
import BgImg from "../../assests/guide.jpg";
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
  margin: "3rem 0",
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
