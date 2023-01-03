import React from "react";
import "./styles";
import { TeamHeading, TeamHeadingWrapper, TeamText } from "./styles";

const Heading = ({ text, headingDesc, variant }) => {
  if (variant === "h3") {
    return (
      <>
        <TeamHeadingWrapper>
          <TeamHeading>{text}</TeamHeading>
          <TeamText>{headingDesc}</TeamText>
        </TeamHeadingWrapper>
      </>
    );
  }
  return (
    <TeamHeadingWrapper>
      <TeamHeading>{text}</TeamHeading>
      <TeamText>{headingDesc}</TeamText>
    </TeamHeadingWrapper>
  );
};

export default Heading;
