import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {
  Image,
  ImageWrapper,
  ServicesWrapper,
  UserName,
  ServicesDetails,
  DetailsWrapper,
  ServicesContentWrapper,
  DetailsSection,
} from "./styles";
import { useNavigate } from "react-router-dom";

const ServicesCard = ({ serviceImg, serviceName, serviceDetails, active }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/services/${serviceName}`, {
      state: {
        serviceName: serviceName,
        serviceImg: serviceImg,
        serviceDetails: serviceDetails,
      },
    });
  };
  return (
    <ServicesWrapper active={active} onClick={handleClick}>
      <ImageWrapper>
        <Image src={serviceImg} alt={serviceName} />
      </ImageWrapper>
      <ServicesContentWrapper>
        <UserName>{serviceName}</UserName>
        <DetailsWrapper>
          <ServicesDetails>{serviceDetails}</ServicesDetails>
        </DetailsWrapper>
      </ServicesContentWrapper>
      <DetailsSection>
        <ServicesDetails text="detail"> Read more</ServicesDetails>
        <ArrowForwardIcon />
      </DetailsSection>
    </ServicesWrapper>
  );
};

export default ServicesCard;
