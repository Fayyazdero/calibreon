import styled from "@emotion/styled";

export const ImageWrapper = styled.div`
  margin-top: 20px;
  display: inline-block;
  transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s,
    -webkit-box-shadow 0.3s;
`;
export const DetailsWrapper = styled.div`
  margin-top: 10px;
`;

export const ServicesDetails = styled.p`
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
export const ServicesWrapper = styled("div")({
  background: "#fff",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  minHeight: "20rem",
  alignItems: "center",
  padding: "0 20px",
  position: "relative",
  "&:hover": {
    border: "1px solid #f54c0a !important",
  },
  "& svg": {
    position: "absolute",
    cursor: "pointer",
    bottom: "0",
    marginBottom: "1rem",
  },
});

export const Image = styled("img")({
  height: "100px",
  maxWidth: "100%",
  transitionDuration: "0.3s",
  "&:hover": {
    transform: "scale(1.1)",
  },
});
export const ServicesContentWrapper = styled("div")({
  position: "relative",
});
