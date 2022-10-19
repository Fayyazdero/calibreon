import styled from "@emotion/styled";
import { Grid, Paper } from "@mui/material";

export const StyledGrid = styled(Grid) ({
    marginTop: '0px'
    
})

export const LinksWrapper = styled('div') ({
    display: 'flex',
    flexDirection: 'column',
    marginTop: '40px',
    fontSize: '14px',
    lineHeight: '24px',
    textDecoration: 'none',
    color: '#748494',
    // marginTop: '10px'
    
})

export const MenuLinks = styled('a') ({
    fontSize: '14px',
    lineHeight: '24px',
    textDecoration: 'none',
    color: '#748494',
    marginTop: '10px'
    
})

export const Item = styled(Paper) ({
    padding: '2px',
    boxShadow: 'none',
    borderRadius: 'none'
  });

  export const AddressWrapper = styled.div`
    margin-top: 40px;
    font-size: 14px;
    line-height: 24px;
    text-decoration: none;
    color: #748494;
  `

  export const Address = styled.p``

  export const IconsWrapper = styled.div`
    margin-top: 80px;
    display: flex;
    justify-content: space-between
  `

  export const Contact = styled.p`
    margin-top: 80px;
`

  export const DesignedBy = styled.p`
    text-align: center;
    font-size: 14px;
    line-height: 24px;
    text-decoration: none;
    color: #748494;
    margin-top: 40px;
  `