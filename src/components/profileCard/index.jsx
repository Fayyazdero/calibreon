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

const Profile = ({ userImg, userName, userRole, userDetails }) => {
  return (
    <ProfileWrapper>
      <ImageWrapper>
        <Image src={userImg} alt={userName} />
      </ImageWrapper>
      <ProfileContentWrapper>
        <UserRole>{userRole}</UserRole>
        <UserName >
          {userName}
        </UserName>
        <DetailsWrapper>
          <UserDetails>
            {userDetails}
          </UserDetails>
        </DetailsWrapper>
        <SocialIcons>
            <Facebook/>
            <Linkedin/>
            <Mail/>
        </SocialIcons>
      </ProfileContentWrapper>
    </ProfileWrapper>
  );
};

export default Profile;
