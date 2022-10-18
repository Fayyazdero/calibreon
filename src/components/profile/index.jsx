import React from "react";
import {
  Image,
  ImageWrapper,
  ProfileWrapper,
  UserName,
  UserRole,
  UserDetails,
  DetailsWrapper,
  ProfileContentWrapper,
} from "./styles";

const Profile = ({ userImg, userName, userRole, userDetails }) => {
  return (
    <ProfileWrapper>
      <ImageWrapper>
        <Image src={userImg} alt={userName} />
      </ImageWrapper>
      <ProfileContentWrapper>
        <UserRole variant="h4">{userRole}</UserRole>
        <UserName variant="h4" align="left">
          {userName}
        </UserName>
        <DetailsWrapper>
          <UserDetails variant="p" align="left">
            {userDetails}
          </UserDetails>
        </DetailsWrapper>
      </ProfileContentWrapper>
    </ProfileWrapper>
  );
};

export default Profile;
