import styled from "@emotion/styled";

export const ImageWrapper = styled.div`
  margin: -80px 0px 0px 0px;
  margin-bottom: 28px;
  width: 35%;
  display: inline-block;
  transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s,
    -webkit-box-shadow 0.3s;
`;
export const DetailsWrapper = styled.div`
  margin-top: 10px;
`;

export const UserDetails = styled.p`
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
export const TeamCardWrapper = styled.div`
  border: 1px solid #ecedef;
  background: #fff;
  text-align: center;
`;
export const UserRole = styled.h4`
  font-family: Poppins;
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: 400;
  color: #f54c0a;
  margin: 0 0 5px 0;
  letter-spacing: 1px;
`;

export const Image = styled("img")({
  height: "auto",
  maxWidth: "100%",
  borderRadius: "50%",
  transitionDuration: "0.3s",
  "&:hover": {
    transform: "scale(1.1)",
  },
});
export const TeamCardContentWrapper = styled.div`
  padding: 5px 20px 20px 20px;
`;
