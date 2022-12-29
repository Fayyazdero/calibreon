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

const ServicesCard = ({ serviceImg, serviceName, serviceDetails, active }) => {
  return (
    <ServicesWrapper active={active}>
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
