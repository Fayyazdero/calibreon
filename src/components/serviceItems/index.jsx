import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { ServicesWrapper, UserName } from "./styles";
import { useNavigate } from "react-router-dom";

const ServicesItem = ({ serviceName, key }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/services/${serviceName}`, {
      state: {
        serviceName: serviceName,
      },
    });
  };
  return (
    <ServicesWrapper key={key} onClick={handleClick}>
      <UserName>{serviceName}</UserName>
      <ArrowForwardIcon />
    </ServicesWrapper>
  );
};

export default ServicesItem;
