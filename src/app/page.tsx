"use client"
import React, { createContext } from 'react'
import styles from './page.module.css'
import Post from './Molecules/Post/Post'
import { posts } from './constants'
export const PostsContext = createContext(posts)
export default function Home() {
  return (
    <PostsContext.Provider value={posts}>
      <main className={styles.main}>
        {posts?.map(item => <Post title={item.title} desc={item.desc} key={item.id} id={item.id} />)}
      </main>
    </PostsContext.Provider>
  )
}
