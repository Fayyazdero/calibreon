import React from "react";
import { Button } from "@mui/material";

const StyledButton = ({ text, variant, color }) => {
  return (
    <Button variant={variant} sx={{ backgroundColor: `${color}` }}>
      {text}
    </Button>
  );
};

export default StyledButton;
