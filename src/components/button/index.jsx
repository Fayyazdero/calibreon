import React from "react";
import { StyledButton } from "./styles";

const Button = ({ sx, variant, children, onClick }) => {
  return (
    <StyledButton variant={variant} sx={{ sx }} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
