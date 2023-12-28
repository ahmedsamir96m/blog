"use client";
import React, { createContext } from "react";
import styles from "./page.module.css";
import Post from "./Molecules/Post/Post";
import { posts } from "./constants";
import { Box } from "@mui/material";
import BaseButton from "./Atoms/BaseButton/BaseButton";
import Link from "next/link";
export const PostsContext = createContext(posts);
export default function Home() {
  return (
    <PostsContext.Provider value={posts}>
      <main className={styles.main}>
        <Box
          sx={{
            m: "50px",
          }}
        >
          <Box
            component={"h1"}
            sx={{
              mb: "30px",
            }}
          >
            Posts List:
          </Box>
          {posts?.map((item) => (
            <Post
              title={item.title}
              desc={item.desc}
              key={item.id}
              id={item.id}
            />
          ))}
          <Link
            style={{
              textDecoration: "none",
              color: "#fff",
              backgroundColor: "green",
              padding: "20px",
              borderRadius: "5px",
            }}
            href="/create"
          >
            create
          </Link>
        </Box>
      </main>
    </PostsContext.Provider>
  );
}
