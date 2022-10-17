import React from 'react'
import {Image, ImageWrapper, ProfileWrapper, UserName, UserRole} from './styles'

const Profile = ({userImg, userName, userRole}) => {
  return (
    <ProfileWrapper>
        <ImageWrapper>
            <Image src={userImg} alt={userName} />
        </ImageWrapper>
        <UserRole variant='h4'>{userRole}</UserRole>
        <UserName variant='h4' align='left'>{userName}</UserName>
        
    </ProfileWrapper>
  )
}

export default Profile