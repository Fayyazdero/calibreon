import styled from "@emotion/styled";

export const ImageWrapper = styled.div`
  margin-top: 20px;
  margin-bottom: 28px;
  width: 70%;
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
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 1.2;
  margin: 0;
`;
export const ServicesWrapper = styled("div")({
  background: "#fff",
  textAlign: "center",
  cursor: "pointer",
  "&:hover": {
    border: "1px solid #f54c0a !important",
  },
});

export const Image = styled("img")({
  height: "auto",
  maxWidth: "100%",
  borderRadius: "50%",
  transitionDuration: "0.3s",
  "&:hover": {
    transform: "scale(1.1)",
  },
});
export const ServicesContentWrapper = styled.div`
  padding: 5px 20px 20px 20px;
`;
