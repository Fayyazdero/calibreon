import React from "react";
import Rating from "@mui/material/Rating";
import {
  TestimonialWrapper,
  UserName,
  TestimonialDetails,
  DetailsWrapper,
  TestimonialContentWrapper,
  RattingWrapper,
} from "./styles";

const TestimonialsCard = ({ name, comment }) => {
  return (
    <>
      <TestimonialWrapper>
        <TestimonialContentWrapper>
          <UserName>{name}</UserName>
          <DetailsWrapper>
            <TestimonialDetails>{comment}</TestimonialDetails>
          </DetailsWrapper>
        </TestimonialContentWrapper>
        <RattingWrapper>
          <Rating name="read-only" defaultValue={5} size="large" readOnly />
        </RattingWrapper>
      </TestimonialWrapper>
    </>
  );
};

export default TestimonialsCard;
