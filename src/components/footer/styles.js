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

  export const AddressWrapper = styled('div') ({
    marginTop: '40px',
    fontSize: '14px',
    lineHeight: '24px',
    textDecoration: 'none',
    color: '#748494',
  })

  export const Address = styled('p') ({
  })

  export const IconsWrapper = styled('div') ({
    marginTop: '80px',
    display: 'flex',
    justifyContent: 'space-between'
  })

  export const Contact = styled('p') ({
    marginTop: '80px'
  })

  export const DesignedBy = styled('p') ({
    textAlign: 'center',
    fontSize: '14px',
    lineHeight: '24px',
    textDecoration: 'none',
    color: '#748494',
    marginTop: '40px'
  })