import React from 'react'
import styles from './page.module.css'
import Post from './Molecules/Post/Post'
import { posts } from './constants'
export default function Home() {

  return (
    <main className={styles.main}>
      {posts?.map(item => <Post title={item.title} desc={item.desc} key={item.id} id={item.id} />)}
    </main>
  )
}
