import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";

export const ImageWrapper = styled(Box) ({
   
})
export const UserName = styled(Typography) ({
    fontFamily: 'Poppins',
    fontWeight: '400',
    fontSize: '1.875rem',
    lineHeight: '1.2',
   
})
export const ProfileWrapper = styled(Box) ({
    boxSizing: 'border-box',
    padding: '20px',
    overflow: 'hidden',
    background: '#f54c0a',
    borderBottomRightRadius: '20px',
    borderTopRightRadius: '20px'
    
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
    borderBottomRightRadius: '20px',
    borderTopRightRadius: '20px',
    height: '200px',
    width: '100%',
})