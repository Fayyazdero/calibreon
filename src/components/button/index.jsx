import { Button } from '@mui/material'
import React from 'react'


const StyledButton = ({text, variant, color}) => {
  return (
   <Button variant={variant} sx={{marginRight: '10px', backgroundColor: `${color}`}}>{text}</Button>
  )
}

export default StyledButton