import styled from "@emotion/styled";
import { Paper } from "@mui/material";

export const Item = styled(Paper)({
  boxShadow: "none",
  borderBottomLeftRadius: "none",
  borderTopLeftRadius: "none",
});

export const SeeMore = styled("span")`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  p {
    padding: 9px 14px;
    cursor: pointer;
    font-family: Poppins;
    letter-spacing: 0.22px;
    font-size: 22px;
    color: #fff;
    text-align: center;
    display: flex;
    align-items: center;
    .css-i4bv87-MuiSvgIcon-root {
      margin-left: 0.6rem;
    }
  }
`;

export const DepartmentHeading = styled.h2`
  padding: 5px 20px;
`;
export const TeamMembersWrapper = styled.div`
  padding: 20px;
  width: unset;
`;
