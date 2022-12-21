import styled from "@emotion/styled";
import { Typography, Box, Input, TextareaAutosize } from "@mui/material";

export const ContactHeading = styled(Typography)`
  font-family: Poppins;
  font-size: ${(props) => (props.variant === "h4" ? "32px" : "70px")};
  color: #fff;
  font-weight: bold;
  line-height: 1;
  text-align: ${(props) => (props.variant === "h4" ? "left" : "center")};
  margin-top: ${(props) => (props.variant === "h4" ? "2.5rem" : "")};
`;

export const ContactDesc = styled(Typography)`
  font-family: Poppins;
  letter-spacing: 0.22px;
  font-size: ${(props) => (props.title === "subheading" ? "24px" : "16px")};
  color: #fff;
  line-height: 1.5;
  textalign: center;
  padding: 1rem;
  margin-bottom: ${(props) => (props.title === "subheading" ? "3rem" : "")};
  text-align: ${(props) => (props.title === "subheading" ? "center" : "left")};
`;

export const ContactWrapper = styled("div")({
  padding: "0 20px",
  display: "flex",
  height: "100%",
  flexDirection: "column",
  justifyContent: "space-between",
});

export const StyledBox = styled(Box)({
  height: "auto",
  padding:"52px 0px",
  display: "flex",
  alignItems: "center",
  backgroundColor: "#f54c0a",
});

export const ContactMessage = styled(Typography)({
  fontFamily: "Poppins",
  fontSize: "32px",
  textAlign: "center",
  fontWeight: 600,
  color: "#f54c0a",
});
export const ContactText = styled(Typography)({
  fontFamily: "Poppins",
  display: "flex",
  marginTop: "20px",
  fontSize: "16px",
  color: "#f54c0a",
  textAlign: "center",
});

export const FormWrapper = styled(Box)({
  backgroundColor: "#fff",
  boxSizing: "border-box",
  padding: "40px 20px",
  borderRadius: "10px",
});

export const InputWrapper = styled(Box)({
  display: "block",
  margin: "35px auto",
  width: "70%",
});

export const StyledInput = styled(Input)({
  width: "100%",
  fontSize: "16px",
  marginBottom: "40px",
  fontFamily: "Poppins",
  "&:after": {
    display: "none",
  },
  "&:before": {
    display: "none",
  },
  "& input": {
    borderBottom: "1px solid #949494",
  },
  "& input:focus": {
    outline: "none",
    borderBottom: "2px solid #f54c0a !important",
  },
});
export const StyledTextArea = styled(TextareaAutosize)({
  width: "100%",
  marginBottom: "20px",
  borderBottom: "1px solid #949494",
  borderTop: "none",
  borderLeft: "none",
  borderRight: "none",
  fontSize: "16px",
  fontFamily: "Poppins",
  color: "#000",
  "&:focus-visible": {
    outline: "none",
    borderBottom: "2px solid #f54c0a !important",
  },
});

export const ButtonWrapper = styled(Box)({
  fontSize: "16px",
  fontFamily: "Poppins",
  textAlign: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "& :first-child": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  "& svg" : {
    marginLeft: "0.6rem"
  }
});
export const ContactDetails = styled(Box)({});
export const ContactItem = styled(Box)({
  display: "flex",
  alignItems: "center",
  "& svg": {
    color: "#ffffff",
    fontSize: "2.3rem",
  },
});
export const IconsWrapper = styled("div")({
  marginTop: "80px",
  marginBottom: "3rem",
  display: "flex",
  paddingRight: "3rem",
  "& svg": {
    marginRight: "2rem",
    color: "#ffffff",
    cursor: "pointer",
  },
});
