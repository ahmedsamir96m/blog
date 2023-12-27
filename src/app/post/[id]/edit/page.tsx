'use client'
import BaseButton from "@/app/Atoms/BaseButton/BaseButton"
import BaseInput from "@/app/Atoms/BaseInput/BaseInput"
import BaseTextarea from "@/app/Atoms/BaseTextarea/BaseTextarea"
import { PostProps } from "@/app/Molecules/Post/post.type"
import { PostsContext } from "@/app/page"
import { Box } from "@mui/material"
import Link from "next/link"
import { SyntheticEvent, useContext, useEffect, useState } from "react"
type Params = {
  params: {
    id: string
  }
}

export default function EditPost({ params: { id } }: Params) {
  const [Post, setPost] = useState<PostProps>()
  const [postTitle, setPostTitle] = useState<string | undefined>('')
  const [postDesc, setPostDesc] = useState<string | undefined>('')
  const newPosts = useContext(PostsContext)

  useEffect(() => {
    newPosts.map(item => {
      if (item?.id === +id) setPost(item)
    })
    setPostDesc(Post?.desc)
    setPostTitle(Post?.title)
  }, [newPosts, id, Post?.desc, Post?.title])

  const handleUpdate = () => {
    newPosts.map((post) => {
      if (post.id === +id && postTitle !== undefined) post.title = postTitle
      if (post.id === +id && postDesc !== undefined) post.desc = postDesc
    })
    window.confirm('Post has been updated')
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
      <Link href={'/'}>Home</Link>
    </div>
  )
}
