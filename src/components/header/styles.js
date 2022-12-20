import styled from "@emotion/styled";
import { Toolbar } from "@mui/material";

export const LogoWrapper = styled.div`
  & img {
    height: 55px;
  }
`;
export const ToolbarBox = styled(Toolbar)({
  position: "relative",
  "& .MuiBox-root .btn:hover": {
    color: "#f54c0a",
  },
  "& .active": {
    fontWeight: "bold",
    borderBottom: "2px solid #f54c0a",
    borderRadius: "0",
  },
});
