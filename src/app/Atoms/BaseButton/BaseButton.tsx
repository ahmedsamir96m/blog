import { Button } from '@mui/material'
import React from 'react'
import { BaseButtonProps } from './baseButton.type'

const BaseButton = ({ label, color, bgColor, handleChange }: BaseButtonProps) => {
  return (
    <Button
      variant='contained'
      sx={{
        mr: '16px',
        color,
        bgcolor: bgColor,
        "&:hover": {
          bgcolor: bgColor,
          opacity: 0.9
        }
      }} onClick={handleChange}>{label}</Button>
  )
}

export default BaseButton