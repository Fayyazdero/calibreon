import React from "react";
import {
  Image,
  ImageWrapper,
  ServicesWrapper,
  UserName,
  ServicesDetails,
  DetailsWrapper,
  ServicesContentWrapper,
} from "./styles";

const ServicesCard = ({ serviceImg, serviceName, serviceDetails }) => {
  return (
    <ServicesWrapper>
      <ImageWrapper>
        <Image src={serviceImg} alt={serviceName} />
      </ImageWrapper>
      <ServicesContentWrapper>
        <UserName>{serviceName}</UserName>
        <DetailsWrapper>
          <ServicesDetails>{serviceDetails}</ServicesDetails>
        </DetailsWrapper>
      </ServicesContentWrapper>
    </ServicesWrapper>
  );
};

export default ServicesCard;
