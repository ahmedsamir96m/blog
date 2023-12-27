'use client'
import BaseButton from "@/app/Atoms/BaseButton/BaseButton"
import BaseInput from "@/app/Atoms/BaseInput/BaseInput"
import BaseTextarea from "@/app/Atoms/BaseTextarea/BaseTextarea"
import PostTitle from "@/app/Atoms/PostTitle/PostTitle"
import { PostProps } from "@/app/Molecules/Post/post.type"
import { posts } from "@/app/constants"
import { Box } from "@mui/material"
import Link from "next/link"
import { SyntheticEvent, useEffect, useState } from "react"
type Params = {
  params: {
    id: string
  }
}

export default function EditPost({ params: { id } }: Params) {
  const [Post, setPost] = useState<PostProps>()
  const [postTitle, setPostTitle] = useState<string | undefined>('')
  const [postDesc, setPostDesc] = useState<string | undefined>('')
  useEffect(() => {
    posts.map(item => {
      if (item?.id === +id) setPost(item)
    })
    setPostDesc(Post?.desc)
    setPostTitle(Post?.title)
  }, [id, Post?.desc, Post?.title])

  const handleUpdate = () => {
    console.log(posts)

    posts.map((post) => {
      if (post.id === +id && postTitle !== undefined) post.title = postTitle
      if (post.id === +id && postDesc !== undefined) post.desc = postDesc
    })
    console.log(posts)
  }

  return (
    <div>
      <div>Post Id: {Post?.id}</div>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column'
      }}>
        <BaseInput label={Post?.title} value={postTitle} onChange={(e: SyntheticEvent) => setPostTitle(e.target.value)} />
        <BaseTextarea label={Post?.desc} value={postDesc} onChange={(e: SyntheticEvent) => setPostDesc(e.target.value)} />
        <BaseButton label="Update" handleChange={handleUpdate} />
      </Box>
    </div>
  )
}
