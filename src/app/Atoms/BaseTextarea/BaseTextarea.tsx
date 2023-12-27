import { TextareaAutosize } from '@mui/material'
import React from 'react'
import { BaseTextareaProps } from './baseTextarea.type'

const BaseTextarea = ({ label, value, onChange }: BaseTextareaProps) => {
  return (
    <TextareaAutosize placeholder={label} minRows={5} value={value} defaultValue={label} style={{ width: '400px' }} onChange={onChange} />
  )
}

export default BaseTextarea