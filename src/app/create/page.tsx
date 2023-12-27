'use client'
import { Box } from "@mui/material";
import BaseInput from "../Atoms/BaseInput/BaseInput";
import BaseTextarea from "../Atoms/BaseTextarea/BaseTextarea";
import BaseButton from "../Atoms/BaseButton/BaseButton";
import { SyntheticEvent, useContext, useState } from "react";
import { PostsContext } from "../page";
import Link from "next/link";

export default function CreatePost() {
  const newPosts = useContext(PostsContext)
  const [postTitle, setPostTitle] = useState<string | undefined>('')
  const [postDesc, setPostDesc] = useState<string | undefined>('')

  const handleCreatePost = () => {
    if (postTitle && postDesc) {
      newPosts.push({
        id: newPosts.length + 2,
        title: postTitle,
        desc: postDesc
      })
    }
    window.confirm(`Post has been created`)
  }
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column'
    }}>
      <BaseInput label="Post Title" onChange={(e: SyntheticEvent) => setPostTitle(e.target.value)} />
      <BaseTextarea label="Post Description" onChange={(e: SyntheticEvent) => setPostDesc(e.target.value)} />
      <BaseButton label="Create" bgColor="green" handleChange={() => handleCreatePost()} />
      <Link href={'/'}>Home</Link>
    </Box>
  )
}

