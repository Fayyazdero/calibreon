import styled from "@emotion/styled";
import { Typography, Button, Box, Input, TextareaAutosize } from "@mui/material";

export const ContactHeading = styled(Typography)({
  fontFamily: "Poppins",
  fontSize: "70px",
  color: "#fff",
  fontWeight: "bold",
  lineHeight: "1",
});

export const ContactDesc = styled(Typography)({
  fontFamily: "Poppins",
  letterSpacing: "0.22px",
  fontSize: "22px",
  color: "#fff",
  fontWeight: "bold",
  lineHeight: "1.5",
  marginTop: "40px",
  marginBottom: "40px",
});

export const ContactWrapper = styled("div")({
    display: 'flex',
    flexDirection: 'column',
  width: "61%",
  margin: "auto",
  height: '100%',
  justifyContent: 'center'
});

export const StyledBox = styled(Box)({
  height: "120vh",
  display: "flex",
  alignItems: "center",
  backgroundColor: "#f54c0a",
});

export const StyledButton = styled(Button)({
  backgroundColor: "#fff",
  color: "#f54c0a",
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
    width: '100%',
    fontSize: '16px',
    marginBottom: '40px',
    fontFamily: 'Poppins'

})
export const StyledTextArea = styled(TextareaAutosize)({
    width: '100%',
    marginBottom: '20px',
    borderBottom: '1px solid #949494',
    borderTop: 'none',
    borderLeft: 'none',
    borderRight: 'none',
    fontSize: '16px',
    fontFamily: 'Poppins',
    color: '#d3d3d3'
    
    })

export const SubmitButton = styled(Button)({
    fontSize: '16px',
    fontFamily: 'Poppins',
    color: '#fff',
    backgroundColor: '#f54c0a'
    
    })
export const ButtonWrapper = styled(Box)({
    fontSize: '16px',
    fontFamily: 'Poppins',
    textAlign: 'center'
    
    })