import React from "react";
import Facebook from "../svgs/Facebook";
import Linkedin from "../svgs/Linkedin";
import Mail from "../svgs/Mail";
import {
  Image,
  ImageWrapper,
  ProfileWrapper,
  UserName,
  UserRole,
  UserDetails,
  DetailsWrapper,
  ProfileContentWrapper,
  SocialIcons,
} from "./styles";
import { useNavigate } from "react-router-dom";

const Profile = ({ userImg, userName, userRole, userDetails }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/home/contact/${userName}`, {
      state: {
        userName: userName,
        userImg: userImg,
        userRole: userRole,
        userDetails: userDetails,
      },
    });
  };
  return (
    <ProfileWrapper onClick={handleClick}>
      <ImageWrapper>
        <Image src={userImg} alt={userName} />
      </ImageWrapper>
      <ProfileContentWrapper>
        <UserRole>{userRole}</UserRole>
        <UserName>{userName}</UserName>
        <DetailsWrapper>
          <UserDetails>{userDetails}</UserDetails>
        </DetailsWrapper>
        <SocialIcons>
          <Facebook height="30px" color="#f54c0a" />
          <Linkedin height="30px" color="#f54c0a" />
          <Mail height="30px" color="#f54c0a" />
        </SocialIcons>
      </ProfileContentWrapper>
    </ProfileWrapper>
  );
};

export default Profile;
