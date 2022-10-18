import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";

export const ImageWrapper = styled(Box) ({
   
})
export const DetailsWrapper = styled(Box) ({
   marginTop: '10px'
})

export const UserDetails = styled(Typography) ({
    fontFamily: 'Poppins',
    fontWeight: '300',
    fontStyle: 'normal',
    fontSize: '1rem',
    marginTop: '11px'
})

export const UserName = styled(Typography) ({
    fontFamily: 'Poppins',
    fontWeight: '400',
    fontSize: '1.875rem',
    lineHeight: '1.2',
   
})
export const ProfileWrapper = styled(Box) ({
    overflow: 'hidden',
    cursor: 'grabbing',
    background: '#fff',
    
})
export const UserRole = styled(Typography) ({
    fontFamily: 'Poppins',
    textTransform: 'uppercase',
    fontSize: '1rem',
    fontWeight: '700',
    color: '#b3b3b3',
    margin: '13px 0',
    letterSpacing: '1px'
})
export const Image = styled('img') ({
    height: '300px',
    width: '100%',
})
export const ProfileContentWrapper = styled(Box) ({
    padding: '20px'
})

