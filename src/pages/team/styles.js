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

//see more

export const SeeMore = styled("span")`
  // border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  .css-1wcsz54-MuiTypography-root {
    padding: 9px 14px;
    cursor: pointer;
    font-family: Poppins;
    letter-spacing: 0.22px;
    font-size: 22px;
    color: #333;
    text-align: center;
    display: flex;
    align-items: center;
    .css-i4bv87-MuiSvgIcon-root {
      margin-left: 0.6rem;
    }
  }
`;
