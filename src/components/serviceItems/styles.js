import styled from "@emotion/styled";

export const UserName = styled.h4`
  font-family: Poppins;
  font-size: 1rem;
  font-weight: normal;
  margin: 0;
`;
export const ServicesWrapper = styled("div")((props) => ({
  position: "relative",
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: "#fff",
  padding: "20px 24px",
  marginBottom: "14px",
  cursor: "pointer",
  "&:hover": {
    color: "#f54c0a",
  },
  "&:last-child": {
    marginBottom: 0,
  },
  "& svg": {
    color: "#f54c0a",
    marginLeft: "1rem",
  },
}));
