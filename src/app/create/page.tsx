'use client'
import { Box } from "@mui/material";
import BaseInput from "../Atoms/BaseInput/BaseInput";
import BaseTextarea from "../Atoms/BaseTextarea/BaseTextarea";
import BaseButton from "../Atoms/BaseButton/BaseButton";

export default function CreatePost() {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column'
    }}>
      <BaseInput label="Post Title" />
      <BaseTextarea label="Post Description" />
      <BaseButton label="Create" bgColor="green" handleChange={() => console.log('samy')}/>
    </Box>
  )
}
