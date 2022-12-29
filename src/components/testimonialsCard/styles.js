import styled from "@emotion/styled";

export const DetailsWrapper = styled.div`
  margin-top: 10px;
`;

export const TestimonialDetails = styled.p`
  font-family: Poppins;
  font-weight: 300;
  font-style: normal;
  font-size: 16px;
  margin-top: 11px 0 0 0;
  color: #54595f;
`;

export const UserName = styled.h4`
  font-family: Poppins;
  font-weight: bold;
  font-size: 1.2rem;
  line-height: 1.2;
  margin: 0;
`;
export const TestimonialCard = styled("div")({
  position: "relative",
  "&:before": {
    content: `' '`,
    position: "absolute",
    height: "calc(100% + 40px)",
    width: "50%",
    top: "-20px",
    background: "red",
    left: "-20px",
    zIndex: 0,
  },
});
export const TestimonialWrapper = styled("div")({
  background: "#fff",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "70px 32px 24px",
  margin: "20px 0",
  position: "relative",
  // boxShadow: "1px 0px 39px 2px #fbb9a0 inset",
  zIndex: 1,
});

export const TestimonialContentWrapper = styled("div")({
  position: "relative",
});
export const RattingWrapper = styled("div")({
  position: "relative",
  "& .MuiRating-root": {
    color: "#f54c0a",
  },
});
