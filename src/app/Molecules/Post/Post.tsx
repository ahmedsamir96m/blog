'use client'
import BaseButton from '@/app/Atoms/BaseButton/BaseButton'
import PostDesc from '@/app/Atoms/PostDesc/PostDesc'
import PostTitle from '@/app/Atoms/PostTitle/PostTitle'
import { Box } from '@mui/material'
import React from 'react'
import { PostProps } from './post.type'
import Link from 'next/link'

const Post = ({ title, desc, id }: PostProps) => {
  
  return (
    <Box sx={{
      border: '2px solid blue',
      p: '8px 32px',
      borderRadius: '5px',
      m: '8px',
      width: '400px'
    }}>
      <Box>
        <PostTitle title={title} />
        <PostDesc description={desc} />
      </Box>
      <Box>
        <Link href={`post/${id}/edit`}>Edit</Link>
        {/* <BaseButton label='Edit' color='#fff' handleChange={() => console.log(id)} /> */}
        <BaseButton label='Delete' color='#fff' bgColor='red' handleChange={() => console.log(id)} />
      </Box>
    </Box>
  )
}

export default Post