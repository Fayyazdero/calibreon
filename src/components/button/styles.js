import styled from "@emotion/styled";

export const StyledButton = styled.button`
  font-family: Poppins;
  background: ${(props) =>
    props.variant === "contained" ? "#f54c0a" : "#ffffff"};
  height: 44px;
  color: ${(props) => (props.variant === "contained" ? "#ffffff" : "#000000")};
  border: ${(props) =>
    props.variant === "contained" ? "1px solid #f54c0a" : "none"};
  padding: 0 20px;
  margin-right: 10px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;
