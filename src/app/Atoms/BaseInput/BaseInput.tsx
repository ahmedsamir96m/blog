import { TextField } from '@mui/material'
import React from 'react'
import { BaseInputProps } from './baseInput.type'

const BaseInput = ({ label, onChange, value }: BaseInputProps) => {
  return (
    <TextField defaultValue={label} value={value} style={{ background: '#fff', borderRadius: '5px' }} onChange={onChange} />
  )
}

export default BaseInput