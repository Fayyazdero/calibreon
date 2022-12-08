import styled from "@emotion/styled";

export const ImageWrapper = styled.div``
export const DetailsWrapper = styled.div`
   margin-top: 10px;
`

export const UserDetails = styled.p`
    font-family: Poppins;
    font-weight: 300;
    font-style: normal;
    font-size: 1rem;
    margin-top: 11px 0 0 0;
`

export const UserName = styled.h4`
    font-family: Poppins;
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 1.2;
    margin: 0;
`
export const ProfileWrapper = styled.div`
    box-shadow: 0px 0px 6px 3px rgba(82,67,67,0.33);
    overflow: hidden;
    cursor: grabbing;
    background: #fff;
    &:hover {
        img {
    transition: all .2s ease-in-out;
            transform: scale(1.1);
        }
    }
    
`
export const UserRole = styled.h4`
    font-family: Poppins;
    text-transform: uppercase;
    font-size: 1rem;
    font-weight: 700;
    color: #f54c0a;
    margin: 0 0 5px 0;
    letter-spacing: 1px;
`

export const Image = styled('img') ({
    objectFit: 'cover',
    height: '300px',
    width: '100%',
})
export const ProfileContentWrapper = styled.div`
    padding: 5px 20px 20px 20px
`

export const SocialIcons = styled.div`
    display: flex;
    column-gap: 20px;
`