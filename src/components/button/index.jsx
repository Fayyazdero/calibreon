import React from "react";
import { StyledButton } from "./styles";

const Button = ({ text, color, variant, children }) => {
  return (
    <StyledButton variant={variant} sx={{ backgroundColor: `${color}` }}>
      {children}
    </StyledButton>
  );
};

export default Button;
