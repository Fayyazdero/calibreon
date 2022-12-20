import styled from "@emotion/styled";
import { Grid, Paper } from "@mui/material";

export const Item = styled(Paper)({
  boxShadow: "none",
  borderBottomLeftRadius: "none",
  borderTopLeftRadius: "none",
});

export const StyledGrid = styled(Grid)({
  marginBottom: "80px",
  marginTop: "40px !important",
});

export const StyledBox = styled.div`
  margin: 60px 0;
`;
export const TeamHeading = styled.h2`
  letter-spacing: -0.00833em;
  font-family: Poppins;
  font-size: 70px;
  font-weight: bold;
  line-height: 1;
  text-align: center;
  margin-bottom: 0;
`;
export const TeamHeadingWrapper = styled.div``;
export const TeamText = styled.p`
  text-align: center;
  font-size: 1.23529rem;
  font-weight: 400;
  line-height: 1.80001;
  width: 68%;
  margin: 20px auto;
`;
