import styled from "@emotion/styled";
const variants = {
  contained: {
    color: "red",
  },

  outlined: {
    color: "yellow",
  },

  default: {
    color: "blue",
  },
};
// color: ${(props) => props.variant === variants[props].color || "#ffffff"};
export const StyledButton = styled.button`
  font-family: Poppins;
  background: ${(props) =>
    props.variant === "contained" ? "#f54c0a" : "#ffffff"};
  height: 44px;
  color: "red";
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
